'use strict';

module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert('wallets', [
			{
				name: 'Ana Souza',
				cpf: '098.768.343-92',
				birthdate: '1998-04-09',
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				name: 'Marcos Cintra',
				cpf: '098.768.567-27',
				birthdate: '2002-03-27',
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				name: 'Rodrigo Alves',
				cpf: '098.768.323-76',
				birthdate: '2000-02-12',
				createdAt: new Date(),
				updatedAt: new Date()
			}
		], {});
	},

	down: (queryInterface, Sequelize) => {
		return queryInterface.bulkDelete('wallets', null, {});
	}
};
