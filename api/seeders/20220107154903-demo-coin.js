'use strict';

module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert('coins', [
			{
				coin: 'BRL',
				fullname: 'Real',
				amount: 112.9,
				walletAddress: 4,
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				coin: 'ETH',
				fullname: 'Etherium',
				amount: 5.437436,
				walletAddress: 4,
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				coin: 'BTC',
				fullname: 'Bitcoin',
				amount: 0.1111123,
				walletAddress: 5,
				createdAt: new Date(),
				updatedAt: new Date()
			}
		], {});
	},

	down: (queryInterface, Sequelize) => {
		return queryInterface.bulkDelete('coins', null, {});
	}
};
