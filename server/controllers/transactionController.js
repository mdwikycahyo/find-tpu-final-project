const Keeper = require("../models/keeperModel");
const Transaction = require("../models/transactionModel")
const nodemailerSend = require("../helpers/nodemailer");
const pushNotification = require("../helpers/pushNotification")

class transactionController{
    static async getTransaction(req, res, next){
        try{
            const transactionDatas = await Transaction.getTransaction()
            res.status(200).json(transactionDatas)
        }
        catch(err){
            next({name:"ServerError", message:err})
        }
    }
    static async getTransactionById(req, res, next){
        const id = req.params.id
        try{
            if(!id){
                next({name:"BadRequest", message:"params id required"})
            }
            const transactionData = await Transaction.getTransactionById(id)
            if(!transactionData[0]){
                next({name:"ResourceNotFound", message:"Data not found"})
            }
            res.status(200).json(transactionData[0])
        }
        catch(err){
            next({name:"ServerError", message:err})
        }
    }
    static async getTransactionByCemetaryName(req, res, next){
        const cemetaryName = req.body.cemetaryName
        if(!cemetaryName){
            next({name:"BadRequest", message:"cemetary name is required"})
        }
        try{
            const transactionData = await Transaction.getTransactionByCemetaryName(cemetaryName)
            if(!transactionData){
                next({name:"ResourceNotFound", message:"Data not found"})
            }
            res.status(200).json(transactionData)
        }
        catch(err){
            next({name:"ServerError", message:err})
        }
    }
    static async getTransactionByCemetaryId(req, res, next){
        const cemetaryID = req.params.id
        if(!cemetaryID){
            next({name:"BadRequest", message:"cemetary ID is required"})
        }
        try{
            const transactionData = await Transaction.getTransactionByCemetaryId(cemetaryID)
            if(!transactionData){
                next({name:"ResourceNotFound", message:"Data not found"})
            }
            res.status(200).json(transactionData)
        }
        catch(err){
            next({name:"ServerError", message:err})
        }
    }
    static async getTransactionByDeceasedName(req, res, next){
        try{
            const deceasedName = req.body.deceasedName
            if(!deceasedName){
                next({name:"BadRequest", message:"deceased name is required"})
            }
            const transactionData = await Transaction.getTransactionByDeceasedName(deceasedName)
            if(!transactionData[0]){
                next({name:"ResourceNotFound", message:"Data not found"})
            }
            res.status(200).json(transactionData[0])
        }
        catch(err){
            next({name:"ServerError", message:err})
        }
    }

    static async createTransaction(req, res, next){
        try{
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
            const id = req.body.cemetaryId
            if(!id){
                next({name:"BadRequest", message:"cemetary ID is required"})
            }
            const cemetaryData = await Keeper.getById(id)
            if(!cemetaryData){
                next({name:"ResourceNotFound", message:"Data not found"})
            }
            const cemetaryPayload = {
                cemetarySpaceId : cemetaryData.cemetarySpaceId,
                position : req.body.spaceLocation
            }
            const transactionCreated = await Transaction.createTransaction(transactionData)
            const filledCemetary = await Keeper.updateCemetarySpace(id, cemetaryPayload)
            pushNotification(transactionData.payerName)
            res.status(201).json(transactionCreated.ops[0])
        }
        catch(err){
            next({name:"ServerError", message:err})
        }
    }
    static async changeStatus(req, res, next){
        const id = req.params.id
        if(!id){
            next({name:"BadRequest", message:"cemetary ID is required"})
        }
        const status = req.body.status
        if(!id){
            next({name:"BadRequest", message:"Status is required"})
        }
        try{
            if(status === "done"){
                const transactionData = await Transaction.getTransactionById(id)
                const email = transactionData[0].email
                nodemailerSend("fd.suparyadi@gmail.com")
                console.log("HERE");
            }
            const data = await Transaction.changeStatus(id, status)
            res.status(200).json({message: "status updated"})

        }
        catch(err){
            next({name:"ServerError", message:err})
        }
    }
    static async updateTransactionData(req, res, next){
        const id = req.params.id
        if(!id){
            next({name:"BadRequest", message:"cemetary ID is required"})
        }
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
            next({name:"ServerError", message:err})
        }
    }
    static async deleteTransactionData(req, res, next){
        const id = req.params.id
        if(!id){
            next({name:"BadRequest", message:"cemetary ID is required"})
        }
        try{
            const transactionData = await Transaction.deleteTransactionData(id)
            res.status(200).json({message:"Transaction data deleted"})
        }
        catch(err){
            next({name:"ServerError", message:err})
        }
    }
}

module.exports = transactionController