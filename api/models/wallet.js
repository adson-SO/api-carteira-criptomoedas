'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class wallet extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      wallet.hasMany(models.coin, {
        foreignKey: 'walletAddress'
      });
      wallet.hasMany(models.transaction, {
        foreignKey: 'walletAddress'
      });
    }
  };
  wallet.init({
    address: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      validate: {
        valida: function (dado) {
          if (dado.length < 7) throw new Error('O campo nome não pode ter menos de 7 caracteres.');
        }
      }
    },
    cpf: {
      type: DataTypes.STRING,
      unique: true,
      validate: {
        is: {
          args: /^\d{3}\.\d{3}\.\d{3}\-\d{2}$/,
          msg: 'O campo cpf está com formato inválido. Siga esse formato: XXX.XXX.XXX-XX'
        },
        valida: function (dado) {
          if (dado.length < 14) throw new Error('O campo cpf está com formato inválido. Siga esse formato: XXX.XXX.XXX-XX');
        }
      }
    },
    birthdate: {
      type: DataTypes.DATEONLY,
      validate: {
        isBefore: {
          args: '2004-01-09',
          msg: 'Usuário deve ter mais de 18 anos de idade.'
        }
      }
    }
  }, {
    sequelize,
    modelName: 'wallet'
  });
  return wallet;
};