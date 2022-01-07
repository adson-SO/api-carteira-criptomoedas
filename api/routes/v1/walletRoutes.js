const router = require('express').Router();
const WalletController = require('../../controllers/WalletController');

router.post('/wallet', WalletController.criaCarteira);
router.get('/wallet', WalletController.pegaTodasAsCarteiras);
router.get('/wallet/:address', WalletController.pegaUmaCarteira);
router.put('/wallet/:address');
router.post('/wallet/:address/transaction');
router.get('/wallet/:address/transaction');
router.delete('/wallet/:address');

module.exports = router;