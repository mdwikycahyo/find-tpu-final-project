const axios = require("axios")
const token = "eG5kX2RldmVsb3BtZW50X3pDZHpsSG0xeVJFUG11N0U4QTNzamlDQURDQUJqbzltY1hYQzF4cTZzR3hhVXQ2ZHJJQ2Y3M2RMS1lybzljVGc6"

class XenditController{
    static async createVA(req, res, next){
        var today = new Date();
        today.setHours(today.getHours() + 11);
        const data = {
            external_id: req.body.transactionId,
            bank_code: req.body.bankCode,
            name: req.body.payerName,
            expected_amount: req.body.expected_amount,
            is_closed: true,
            is_single_use:true,
            expiration_date: today
        }
        try{
            const createdAccount = await axios({
                method:"POST",
                url:"https://api.xendit.co/callback_virtual_accounts",
                headers:{
                    "Authorization": "Basic "+token
                },
                data
            })
            res.status(200).json(createdAccount.data)
        }
        catch(err){
            next({name:"ServerError", message:err})
        }
    }
    static async createdInvoice(req, res, next){
        var today = new Date();
        today.setHours(today.getHours() + 11);
        const data = {
            external_id: req.body.transactionId,
            amount: req.body.expected_amount,
            payer_email: req.body.payerEmail,
            description: 'Booking pemakaman'
        }
        try{
            const CreatedInvoice = await axios({
                method:"POST",
                url:"https://api.xendit.co/v2/invoices",
                headers:{
                    "Authorization": "Basic "+token
                },
                data
            })
            res.status(200).json(CreatedInvoice.data)
        }
        catch(err){
            next({name:"ServerError", message:err})

        }
    }

    static async getInvoice(req, res, next){
        const invoiceID = req.params.id
        try{
            console.log(invoiceID);
            const getInvoice = await axios({
                method:"POST",
                url: `https://api.xendit.co/v2/invoices/60dc54ebe9a4efaf208df12d`,
                headers:{
                    "Authorization": "Basic "+token
                }
            })
            res.status(200).json(getInvoice.data)
        }
        catch(err){
            // console.log(err);
            next({name:"ServerError", message:err})
        }
    }
}

module.exports = XenditController