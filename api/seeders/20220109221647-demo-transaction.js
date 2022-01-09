module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('transactions', [
      {
        value: 2.594,
        sendTo: 4,
        receiveFrom: 6,
        currentCotation: 0.324242,
        coinId: 4,
        walletAddress: 4,
        datetime: new Date(),
        updatedAt: new Date()
      },
      {
        value: 3.746,
        sendTo: 6,
        receiveFrom: 4,
        currentCotation: 0.324343,
        coinId: 4,
        walletAddress: 4,
        datetime: new Date(),
        updatedAt: new Date()
      },
      {
        value: 1.0094,
        sendTo: 4,
        receiveFrom: 6,
        currentCotation: 0.331,
        coinId: 5,
        walletAddress: 4,
        datetime: new Date(),
        updatedAt: new Date()
      }
    ], {})
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('transactions', null, {})
  }
}
