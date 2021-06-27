const axios = require("axios")
const token = "eG5kX2RldmVsb3BtZW50X3pDZHpsSG0xeVJFUG11N0U4QTNzamlDQURDQUJqbzltY1hYQzF4cTZzR3hhVXQ2ZHJJQ2Y3M2RMS1lybzljVGc6"

class XenditController{
    static async createVA(req, res, next){
        const data = {
            external_id: req.body.transactionId,
            bank_code: req.body.bankCode,
            name: req.body.payerName,
            expected_amount: req.body.expected_amount,
            is_closed: true,
            is_single_use:true
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
            console.log(err);
        }
    }
}

module.exports = XenditController