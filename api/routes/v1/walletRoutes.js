const router = require('express').Router();
const WalletController = require('../../controllers/WalletController');

router.post('/wallet', WalletController.criaCarteira);
router.get('/wallet');
router.get('/wallet/:address');
router.put('/wallet/:address');
router.post('/wallet/:address/transaction');
router.get('/wallet/:address/transaction');
router.delete('/wallet/:address');

module.exports = router;