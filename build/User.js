import { DatabaseBuilder, Sequelize as S } from 'xernerx-database';

export default class UserDatabase extends DatabaseBuilder {
	constructor() {
		super('Users', {
			name: 'users',
			database: 'database',
			username: 'username',
			password: 'password',
			host: 'localhost',
			logging: false,
			storage: 'data/database',
			structure: {
				name: {
					type: S.STRING,
					unique: true,
				},
				nickname: S.STRING,
			},
		});
	}
}
