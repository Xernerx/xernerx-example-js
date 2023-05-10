import { SlashCommandBuilder, EmbedBuilder } from 'xernerx';

export default class argumentsCommand extends SlashCommandBuilder {
	constructor() {
		super('arguments', {
			name: 'arguments',
			description: 'A plain command with just args.',
			args: [
				{
					type: 'string',
					name: 'string',
					description: 'This is a string option.',
					choices: [
						{
							'Choice 1': 'Choice 1',
						},
						{
							'Choice 2': 'Choice 2',
						},
						{
							'Choice 3': 'Choice 3',
						},
					],
				},
				{
					type: 'boolean',
					name: 'boolean',
					description: 'This is a boolean option.',
				},
				{
					type: 'user',
					name: 'user',
					description: 'This is a user option.',
				},
				{
					type: 'channel',
					name: 'channel',
					description: 'This is a channel option.',
				},
				{
					type: 'number',
					name: 'number',
					description: 'This is a number option.',
				},
				{
					type: 'integer',
					name: 'integer',
					description: 'This as an integer option.',
				},
				{
					type: 'role',
					name: 'role',
					description: 'This is a role option.',
				},
				{
					type: 'mentionable',
					name: 'mentionable',
					description: 'This is a mentionable option.',
				},
			],
		});
	}

	async exec(interaction, { args }) {
		return await interaction.util.reply({ content: String(args) });
	}
}
