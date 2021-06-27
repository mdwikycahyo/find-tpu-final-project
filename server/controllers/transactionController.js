const Transaction = require("../models/transactionModel")

class transactionController{
    static async getTransaction(req, res, next){
        try{
            const transactionDatas = await Transaction.getTransaction()
            res.status(200).json(transactionDatas)
        }
        catch(err){
            console.log(err);
        }
    }
    static async getTransactionById(req, res, next){
        const id = req.params.id
        try{
            const transactionData = await Transaction.getTransactionById(id)
            res.status(200).json(transactionData[0])
        }
        catch(err){
            console.log(err);
        }
    }
    static async getTransactionByCemetaryName(req, res, next){
        const cemetaryName = req.body.cemetaryName
        try{
            const transactionData = await Transaction.getTransactionByCemetaryName(cemetaryName)
            res.status(200).json(transactionData)
        }
        catch(err){
            console.log(err);
        }
    }
    static async getTransactionByCemetaryId(req, res, next){
        const cemetaryID = req.params.id
        try{
            const transactionData = await Transaction.getTransactionByCemetaryId(cemetaryID)
            res.status(200).json(transactionData)
        }
        catch(err){
            console.log(err);
        }
    }
    static async getTransactionByDeceasedName(req, res, next){
        const deceasedName = req.body.deceasedName
        try{
            const transactionData = await Transaction.getTransactionByDeceasedName(deceasedName)
            res.status(200).json(transactionData[0])
        }
        catch(err){
            console.log(err);
        }
    }

    static async createTransaction(req, res, next){
        const transactionData = {
            deceasedName : req.body.deceasedName,
            diedDate : req.body.diedDate,
            bornDate : req.body.bornDate,
            burialDate : req.body.burialDate,
            religion : req.body.religion,
            fatherName : req.body.fatherName,
            spaceLocation : req.body.spaceLocation,
            status : "pending",
            price: req.body.price,
            facility : req.body.facility,
            cemetaryName: req.body.cemetaryName,
            cemetaryId: req.body.cemetaryId,
            payerName: req.body.payerName,
            phoneNumber: req.body.phoneNumber,
            email: req.body.email,
            paymentId: ""
        }
        try{
            const transactionCreated = await Transaction.createTransaction(transactionData)
            res.status(201).json(transactionCreated.ops[0])

        }
        catch(err){
            console.log(err);
        }
    }
    static async changeStatus(req, res, next){
        const id = req.params.id
        try{
            const status = "done"
            const data = await Transaction.changeStatus(id)
            res.status(200).json({message: "status updated"})

        }
        catch(err){
            console.log(err);
        }
    }
    static async updateTransactionData(req, res, next){
        const id = req.params.id
        const transactionData = {
            deceasedName : req.body.deceasedName,
            diedDate : req.body.diedDate,
            bornDate : req.body.bornDate,
            burialDate : req.body.burialDate,
            religion : req.body.religion,
            fatherName : req.body.fatherName,
            spaceLocation : req.body.spaceLocation,
            status : req.body.status,
            price: req.body.price,
            facility : req.body.facility,
            cemetaryName: req.body.cemetaryName,
            cemetaryId: req.body.cemetaryId,
            payerName: req.body.payerName,
            phoneNumber: req.body.phoneNumber,
            email: req.body.email,
            paymentId: req.body.paymentId
        }
        try{
            const updatedData = await Transaction.updateTransactionData(id,transactionData)
            res.status(200).json({message: "Transaction data updated"})
        }
        catch(err){
            console.log(err);
        }
    }
    static async deleteTransactionData(req, res, next){
        const id = req.params.id
        try{
            const transactionData = await Transaction.deleteTransactionData(id)
            res.status(200).json({message:"Transaction data deleted"})
        }
        catch(err){
            console.log(err);
        }
    }
}

module.exports = transactionController