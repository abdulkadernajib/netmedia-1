const express = require('express');
const voucherController = require('../Controller/voucher')
const router = express.Router();



exports.router = router
    .post('/debtor', voucherController.addDebtors)
    .post('/creditor', voucherController.addCreditors)
    .get('/debtor/all', voucherController.getDebtors)
    .get('/creditor/all', voucherController.getCreditor)
    .get('/creditor/:id', voucherController.getCreditor)
    .get('/debtor/:id', voucherController.getDebtorById)
    .put('/debtor/:id', voucherController.updateDebtor)
    .delete('/debtor/:id', voucherController.deleteDebtor)
    .put('/creditor/:id', voucherController.updateCreditor)
    .delete('/creditor/:id', voucherController.deleteCreditor)