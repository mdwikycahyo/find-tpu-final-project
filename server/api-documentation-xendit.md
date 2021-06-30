# RESTful Endpoints

## Transaction

### Create Invoice

## POST /xendit/createInvoice

_request body_
```
    {            
        "transactionId": "60d8b8ef41c45f3bd0b7b5da",
        "expected_amount": 200000,
        "payerEmail": "fak.rez@gmail.com",
        "description": "Booking pemakaman"
    }
```
_response 200_
```
{
    "id": "60daff2232bbbe2c3e9a9b26",
    "external_id": "60d8b8ef41c45f3bd0b7b5da",
    "user_id": "60d5aa322a193b7b9dcb4cd9",
    "status": "PENDING",
    "merchant_name": "test",
    "merchant_profile_picture_url": "https://du8nwjtfkinx.cloudfront.net/xendit.png",
    "amount": 200000,
    "payer_email": "fak.rez@gmail.com",
    "description": "Booking pemakaman",
    "expiry_date": "2021-06-30T11:08:17.599Z",
    "invoice_url": "https://checkout-staging.xendit.co/web/60daff2232bbbe2c3e9a9b26",
    "available_banks": [
        {
            "bank_code": "MANDIRI",
            "collection_type": "POOL",
            "bank_account_number": "8860857589498",
            "transfer_amount": 200000,
            "bank_branch": "Virtual Account",
            "account_holder_name": "TEST",
            "identity_amount": 0
        },
        {
            "bank_code": "BRI",
            "collection_type": "POOL",
            "bank_account_number": "2621565346475",
            "transfer_amount": 200000,
            "bank_branch": "Virtual Account",
            "account_holder_name": "TEST",
            "identity_amount": 0
        },
        {
            "bank_code": "BNI",
            "collection_type": "POOL",
            "bank_account_number": "880811033529",
            "transfer_amount": 200000,
            "bank_branch": "Virtual Account",
            "account_holder_name": "TEST",
            "identity_amount": 0
        },
        {
            "bank_code": "PERMATA",
            "collection_type": "POOL",
            "bank_account_number": "821470929602",
            "transfer_amount": 200000,
            "bank_branch": "Virtual Account",
            "account_holder_name": "TEST",
            "identity_amount": 0
        },
        {
            "bank_code": "BCA",
            "collection_type": "POOL",
            "bank_account_number": "1076690297643",
            "transfer_amount": 200000,
            "bank_branch": "Virtual Account",
            "account_holder_name": "TEST",
            "identity_amount": 0
        }
    ],
    "available_retail_outlets": [
        {
            "retail_outlet_name": "ALFAMART",
            "payment_code": "TEST219070",
            "transfer_amount": 200000
        },
        {
            "retail_outlet_name": "INDOMARET",
            "payment_code": "TEST150184",
            "transfer_amount": 200000
        }
    ],
    "available_ewallets": [
        {
            "ewallet_type": "OVO"
        },
        {
            "ewallet_type": "DANA"
        },
        {
            "ewallet_type": "SHOPEEPAY"
        },
        {
            "ewallet_type": "LINKAJA"
        }
    ],
    "should_exclude_credit_card": false,
    "should_send_email": false,
    "created": "2021-06-29T11:08:18.283Z",
    "updated": "2021-06-29T11:08:18.283Z",
    "currency": "IDR"
}
```