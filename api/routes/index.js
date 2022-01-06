const v1 = require('./v1/walletRoutes');

module.exports = app => {
    app.use('/api/v1',v1);
}