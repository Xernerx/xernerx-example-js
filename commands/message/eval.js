const { inspect, promisify } = require("util");
const { exec } = require('child_process');
const { MessageCommand, Discord } = require('xernerx');

let sh = promisify(exec)

const fs = require('fs');
const got = require('got');

const config = require('../../data/config/config.json');

const types = {
    "sh": "Shell command",
    "haste": "Code haste",
    "js": "Evaluate Code",
    "src": "Source Code"
}

class EvalCommand extends MessageCommand {
    constructor() {
        super('evaluate', {
            name: 'evaluate',
            description: 'Evaluate JavaScript code.',
            aliases: ['eval', "ev"],
            owner: true,
            category: "Developer",
            args: [{
                name: "type",
                type: "option",
                content: ["js", "haste", "sh", "src"]
            }, {
                name: 'code',
                type: "rest",
            }, {
                name: "nomsg",
                type: "flag",
                content: "--nm"
            }, {
                name: "dm",
                type: "flag",
                content: "--dm"
            }, {
                name: "nosrc",
                type: "flag",
                content: "--ns"
            }]
        })
    }

    async exec(message, args) {
        let output, dir;

        if (!args.type) return message.util.reply(`Invalid option, please use one of the following options: ${this.args[0].content.join(', ')}`);

        if (String(args.type).toLowerCase() == "js") {
            output = await this.evaluate(args.code, message);
        }

        if (String(args.type) == "src") {
            output = await this.source(args.code);
        }

        if (String(args.type).toLowerCase() == "haste") {
            output = { state: true };

            try {
                dir = fs.readdirSync(args.code);
            }
            catch {
                dir = undefined;
            }

            if (!args.code) output.code = `You're currently in: \`${fs.realpathSync("./")}\`\nThe following files and folders are stored here\n>>> ${fs.readdirSync("./").join('\n')}`;

            else if (Array.isArray(dir)) output.code = `You're currently in: \`${fs.realpathSync("./" + args.code)}\`\nThe following files and folders are stored here\n>>> ${fs.readdirSync("./" + args.code).join('\n')}`;

            else if (!Array.isArray(dir)) {
                try {
                    let body = fs.readFileSync(args.code, { encoding: 'utf-8' });

                    output.code = `\`\`\`${args.code.match(/\.\w+/g)[0].replace(/\./g, "")}\n` + body + "```";

                    output.state = true;

                    output.url = await this.haste(body);
                }
                catch (error) {
                    output.code = "Not a valid path";

                    output.state = false;

                    output.url = await this.haste(inspect(error));
                }
            }
        }

        if (String(args.type).toLowerCase() == "sh") {
            output = {};

            try {
                let shell = await sh(args.code)

                output.code = "```js\n" + inspect(shell) + "```";

                output.state = true;

                output.url = await this.haste(inspect(shell));
            }
            catch (error) {
                output.code = error.name + ": " + error.message;

                output.state = false;

                output.url = await this.haste(inspect(error));
            }
        }

        let embed = new Discord.EmbedBuilder()
            .setTitle(types[args.type])
            .setDescription(output.code?.length < 4000 ? output.code : `Code is ${output.code?.length} characters. Can't show within discord.`)
            .setColor(output.state ? this.client.color.embed : "#420000")
            .setURL(output.url)
            .setFooter({ text: message.author.username, iconURL: message.author.avatarURL({ dynamic: true }) })
            .setTimestamp()

        if (!args.flags.nomsg) await message.util.reply({ content: null, embeds: [embed] });

        if (args.flags.dm) await message.author.send({ content: null, embeds: [embed] });

        if (args.flags.nosrc) await message.delete();
    }

    clean(text) {
        if (typeof text === 'string') return text.replace(/`/g, '`' + String.fromCharCode(8203)).replace(/@/g, '@' + String.fromCharCode(8203));
        else return text;
    }

    async evaluate(code, message) {
        if (!code) code = '"No code value was given.";'

        const channel = await message.channel,
            author = await message.author,
            guild = await message.guild,
            member = await message.member,
            members = await message?.guild?.members,
            users = await this.client.users,
            guilds = (await this.client.guilds.fetch()).values(),
            client = await this.client;

        let output, state;

        code = code?.replace(/```js\n|```/g, "");

        try {
            output = await eval(`(async () => { ${code} })();`);

            state = true;
        }
        catch (error) {
            output = error.name + ": " + error.message;

            state = false;
        }

        if (typeof output !== 'string') output = inspect(output)

        output = output.replaceAll(this.client.token, "You thought you'd be able to get my token didn't you!");

        output = await this.clean(output)

        return { code: "```js\n" + output + "```", state, url: await this.haste(inspect(output)) };
    }

    async haste(text) {
        const hasteURLs = [
            "https://hst.sh",
            "https://hastebin.com",
            "https://haste.clicksminuteper.net",
            "https://haste.tyman.tech"
        ];

        for (const url of hasteURLs) {
            try {
                const resp = await got.post(url + "/documents", {
                    body: text
                }).json()
                return `${url}/${resp.key}`;
            } catch (e) {
                console.error(e);
                continue;
            }
        }
        throw new Error("Haste failure");
    }

    async source(src) {
        let source, state;
        try {
            source = await eval(src);

            if (typeof source === 'object') source = inspect(source);

            source = "```js\n" + source.toString() + "```";

            source = source.replace(this.client.token, "Ehm... This is awkward... No token...")

            state = true;
        }
        catch (e) {
            source = "Not a valid source."

            state = false;
        }

        return { code: source, state: state, url: await this.haste(source) };
    }
}

module.exports = EvalCommand;