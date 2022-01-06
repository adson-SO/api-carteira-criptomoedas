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
}

module.exports = WalletController;