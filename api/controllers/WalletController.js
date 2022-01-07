const database = require('../models');

class WalletController {
    static async criaCarteira(req, res) {
        try {
            const dadosCorpo = req.body;
            const carteiraCriada = await database.wallet.create(dadosCorpo);
    
            return res.status(201).json(carteiraCriada);
        } catch(err) {
            return res.status(400).json(err.message);
        }
    }

    static async pegaTodasAsCarteiras(req, res) {
        try {
            const todasAsCarteiras = await database.wallet.findAll({ 
                include: {
                attributes: { exclude: ['id', 'createdAt', 'updatedAt', 'walletAddress'] },
                model: database.coin,
                include: database.transaction
            }
        });

            res.status(200).json(todasAsCarteiras);
        } catch(err) {
            return res.status(500).json(err.message);
        }
    }

    static async pegaUmaCarteira(req, res) {
        try {
            const address = req.params.address;
            const carteira = await database.wallet.findOne({ 
                include: {
                attributes: { exclude: ['id', 'createdAt', 'updatedAt', 'walletAddress'] },
                model: database.coin,
                include: database.transaction
            }
        }, {
            where: { address: address }
        });

        res.status(200).json(carteira);
        } catch(err) {
            res.status(404).json(err.message);
        }
    }
}

module.exports = WalletController;