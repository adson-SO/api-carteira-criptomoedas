const database = require('../models');
const { Op } = require('sequelize');

class WalletController {
    static async criaCarteira(req, res) {
        try {
            const dadosCorpo = req.body;
            const carteiraCriada = await database.wallet.create(dadosCorpo);

            return res.status(201).json(carteiraCriada);
        } catch (err) {
            return res.status(400).json(err.message);
        }
    }

    static async pegaTodasAsCarteiras(req, res) {
        try {
            const { name, cpf, birthdate, amount, createdAt, updatedAt } = req.query;
            const where = {}

            name ? where.name = {} : null;
            name ? where.name[Op.eq] = name : null;

            cpf ? where.cpf = {} : null;
            cpf ? where.cpf[Op.eq] = cpf : null;

            birthdate ? where.birthdate = {} : null;
            birthdate ? where.birthdate[Op.eq] = birthdate : null;

            amount ? where.amount = {} : null;
            amount ? where.amount[Op.eq] = amount : null;

            createdAt ? where.createdAt = {} : null;
            createdAt ? where.createdAt[Op.eq] = createdAt : null;

            updatedAt ? where.updatedAt = {} : null;
            updatedAt ? where.updatedAt[Op.eq] = updatedAt : null;

            const todasAsCarteiras = await database.wallet.findAll({ where,
                include: {
                    attributes: { exclude: ['id', 'createdAt', 'updatedAt', 'walletAddress'] },
                    model: database.coin,
                    include: {
                        model: database.transaction,
                        attributes: { exclude: ['id', 'coinId', 'walletAddress', 'updatedAt'] }
                    }
                }
            });

            res.status(200).json(todasAsCarteiras);
        } catch (err) {
            return res.status(500).json(err.message);
        }
    }

    static async pegaUmaCarteira(req, res) {
        try {
            const address = req.params.address;
            const carteira = await database.wallet.findOne({
                where: { address: address },
                include: {
                    attributes: { exclude: ['id', 'createdAt', 'updatedAt', 'walletAddress'] },
                    model: database.coin,
                    include: {
                        model: database.transaction,
                        attributes: { exclude: ['id', 'coinId', 'walletAddress', 'updatedAt'] }
                    }
                }
            });

            res.status(200).json(carteira);
        } catch (err) {
            res.status(404).json(err.message);
        }
    }

    static async atualizaCarteira(req, res) {
        try {
            const carteiraAddress = req.params.address;
            const novasInfo = req.body;

            await database.wallet.update(novasInfo, { where: { address: carteiraAddress } });

            res.status(204).end();
        } catch (err) {
            res.status(404).json(err.message);
        }
    }

    static async listaTransacoes(req, res) {
        try {
            const carteiraAddress = req.params.address;

            const transacoes = await database.coin.findAll({
                where: { walletAddress: carteiraAddress },
                attributes: { exclude: ['id', 'fullname', 'amount', 'createdAt', 'updatedAt', 'walletAddress'] },
                include: {
                    model: database.transaction,
                    attributes: { exclude: ['id', 'updatedAt', 'coinId', 'walletAddres'] }
                }
            });

            res.status(200).json(transacoes);
        } catch (err) {
            res.status(500).json(err.message);
        }
    }

    static async apagaCarteira(req, res) {
        try {
            const address = req.params.address;

            await database.transaction.destroy({
                where: {
                    walletAddress: address
                }
            });

            await database.coin.destroy({
                where: {
                    walletAddress: address
                }
            });

            await database.wallet.destroy({
                where: {
                    address: address
                }
            });

            res.status(204).end();
        } catch (err) {
            res.status(404).json(err.message);
        }
    }
}

module.exports = WalletController;