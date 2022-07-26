const { inspect, promisify } = require("util");
const { exec } = require('child_process');
const { MessageCommand } = require('xernerx');
let sh = promisify(exec)

const clean = (text) => {
    if (typeof text === 'string') return text.replace(/`/g, '`' + String.fromCharCode(8203)).replace(/@/g, '@' + String.fromCharCode(8203));
    else return text;
};

class EvalCommand extends MessageCommand {
    constructor() {
        super('eval', {
            name: 'eval',
            description: 'eval!',
            aliases: ['ev'],
            args: [{
                name: 'code',
                type: "rest",
                content: 'rest'
            }]
        })
    }

    async exec(message, args) {
        let code = args.code?.replace(/```js\n|```/g, "");

        try {
            let output;

            if (!code) output = "```js\nNo code to be evaluated.```";

            output = await eval(code);

            if (typeof output !== 'string') output = inspect(output);

            output = await output.replaceAll(this.client.token, "Insert very secure and private token here :)");
            output = await clean(output);

            output.length < 2000 ? message.reply("```js\n" + output + "```" || 'error') : message.reply('Code is too long'), console.log(output);
        }
        catch (error) {
            inspect(error).length < 2000 ? message.reply("```js\n" + error + "```" || 'error') : message.reply('Error is too long');
        }
    }
}

module.exports = EvalCommand;