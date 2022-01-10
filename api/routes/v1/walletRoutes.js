const router = require('express').Router();
const WalletController = require('../../controllers/WalletController');

router.post('/wallet', WalletController.criaCarteira);
router.get('/wallet', WalletController.pegaTodasAsCarteiras);
router.get('/wallet/:address', WalletController.pegaUmaCarteira);
router.put('/wallet/:address', WalletController.atualizaCarteira);
router.get('/wallet/:address/transaction', WalletController.listaTransacoes);
router.delete('/wallet/:address', WalletController.apagaCarteira);

module.exports = router;