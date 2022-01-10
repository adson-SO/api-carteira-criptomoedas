'use strict';

module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert('coins', [
			{
				coin: 'BRL',
				fullname: 'Real',
				amount: 112.9,
				walletAddress: 1,
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				coin: 'ETH',
				fullname: 'Etherium',
				amount: 5.437436,
				walletAddress: 1,
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				coin: 'BTC',
				fullname: 'Bitcoin',
				amount: 0.1111123,
				walletAddress: 2,
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				coin: 'ETH',
				fullname: 'Etherium',
				amount: 2.437436,
				walletAddress: 3,
				createdAt: new Date(),
				updatedAt: new Date()
			}
		], {});
	},

	down: (queryInterface, Sequelize) => {
		return queryInterface.bulkDelete('coins', null, {});
	}
};
