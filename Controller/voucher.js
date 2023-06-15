const mongoose = require('mongoose')
const assert = mongoose.assert
const Model = require('../Models/voucher');

const Debtors = Model.Debtors;
const Creditors = Model.Creditors;
const currentDate = new Date().toString();

exports.addDebtors = async (req, res) => {
    req.body.createdOn = currentDate
    req.body.updatedOn = currentDate
    const debtors = new Debtors(req.body);

    try {
        await debtors.save()
        res.status(201).json('Debtor created successfully');
    }
    catch (error) {
        if (error.code === 11000) {
            const kv = error.keyValue
            res.status(400).send(kv);
        }
        else {
            res.status(400).send(error);
        }
    }
};

exports.addCreditors = async (req, res) => {
    req.body.createdOn = currentDate
    req.body.updatedOn = currentDate
    const creditors = new Creditors(req.body);


    try {
        await creditors.save()
        res.status(201).json('Creditor created successfully');
    }
    catch (err) {
        if (error.code === 11000) {
            const kv = error.keyValue
            res.status(400).send(kv);
        }
        else {
            res.status(400).send(error);
        }
    }
};

exports.getDebtors = async (req, res) => {
    const debtors = await Debtors.find();
    res.status(201).send(debtors)
};

exports.getCreditor = async (req, res) => {
    const creditors = await Creditors.find();
    res.status(201).send(creditors)
};

exports.getCreditorById = async (req, res) => {

    const _id = req.params.id;

    let error;

    try {
        // const mobile = await Model.findOne({ _id: _id }).exec()
        const creditor = await Creditors.findById(_id)
        res.send({ creditor })
    }
    catch (err) {
        error = err
        res.status(400).send(error);
    }

};
exports.getDebtorById = async (req, res) => {

    const _id = req.params.id;

    let error;

    try {
        // const mobile = await Model.findOne({ _id: _id }).exec()
        const debtor = await Debtors.findById(_id)
        res.send({ debtor })
    }
    catch (err) {
        error = err
        res.status(400).send(error);
    }
};

exports.updateDebtor = async (req, res) => {
    const _id = req.params.id;

    var newData = {
        businessName: req.body.businessName,
        contactPerson: req.body.contactPerson,
        phone: req.body.phone,
        phone2: req.body.phone2,
        address: {
            address: req.body.address.address,
            city: req.body.address.city,
            state: req.body.address.state,
            pinCode: req.body.address.pinCode,
        },
        compliance: {
            gstNo: req.body.compliance.gstNo,
            gstType: req.body.compliance.gstType,
            panNo: req.body.compliance.panNo
        },
        bankDetails: {
            accountNo: req.body.bankDetails.accountNo,
            bankName: req.body.bankDetails.bankName,
            ifsc: req.body.bankDetails.ifsc,
            branch: req.body.bankDetails.branch
        },
        closingBalance: req.body.closingBalance,
        updatedOn: currentDate
    }

    try {
        await Debtors.findByIdAndUpdate(_id, newData);
        res.status(201).json(_id + 'updated successfully')
    } catch (error) {
        res.status(400).json(error)
    }
}

exports.deleteDebtor = async (req, res) => {
    _id = req.params.id

    try {
        await Debtors.findByIdAndDelete(_id);
        res.status(200).json(`Debtor with _id: ${_id} deleted..`)
    } catch (error) {
        res.status(400).send(error)

    }
}

exports.updateCreditor = async (req, res) => {
    const _id = req.params.id;

    var newData = {
        businessName: req.body.businessName,
        contactPerson: req.body.contactPerson,
        phone: req.body.phone,
        phone2: req.body.phone2,
        address: {
            address: req.body.address.address,
            city: req.body.address.city,
            state: req.body.address.state,
            pinCode: req.body.address.pinCode,
        },
        compliance: {
            gstNo: req.body.compliance.gstNo,
            gstType: req.body.compliance.gstType,
            panNo: req.body.compliance.panNo
        },
        bankDetails: {
            accountNo: req.body.bankDetails.accountNo,
            bankName: req.body.bankDetails.bankName,
            ifsc: req.body.bankDetails.ifsc,
            branch: req.body.bankDetails.branch
        },
        closingBalance: req.body.closingBalance,
        updatedOn: currentDate
    }

    try {
        await Creditors.findByIdAndUpdate(_id, newData);
        res.status(201).json(_id + 'updated successfully')
    } catch (error) {
        res.status(400).json(error)
    }
}

exports.deleteCreditor = async (req, res) => {
    _id = req.params.id

    try {
        await Creditors.findByIdAndDelete(_id);
        res.status(200).json(`Creditor with _id: ${_id} deleted..`)
    } catch (error) {
        res.status(400).send(error)

    }
}
