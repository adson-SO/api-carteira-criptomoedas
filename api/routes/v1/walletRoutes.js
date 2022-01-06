const router = require('express').Router();

router.post('/wallet');
router.get('/wallet');
router.get('/wallet/:address');
router.put('/wallet/:address');
router.post('/wallet/:address/transaction');
router.get('/wallet/:address/transaction');
router.delete('/wallet/:address');

module.exports = router;