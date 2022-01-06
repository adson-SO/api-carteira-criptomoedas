'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class coin extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  coin.init({
    coin: DataTypes.STRING,
    fullname: DataTypes.STRING,
    amount: DataTypes.DOUBLE
  }, {
    sequelize,
    modelName: 'coin',
  });
  return coin;
};