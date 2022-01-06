'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('transactions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      value: {
        type: Sequelize.DOUBLE
      },
      datetime: {
        type: Sequelize.DATE
      },
      sendTo: {
        type: Sequelize.INTEGER
      },
      receiveFrom: {
        type: Sequelize.INTEGER
      },
      currentCotation: {
        type: Sequelize.DOUBLE
      },
      coinId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'coin', key: 'id' }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('transactions');
  }
};