# RESTful Endpoints

## Transaction

```
GET /transaction/
(GET ALL TRANSACTION)

POST /transaction/
(Create transaction)

POST /xendit/createVA
(membuat virtual account xendit)

GET /transaction/:id
(GET TRANSACTION ID)

PUT /transaction/:id
(mengupdate transaction data)

POST /transaction/cemetary
(GET ALL transaction based on cemetary name)

GET /transaction/cemetary/:id
(GET all transaction based on cemetary id)

POST /transaction/deceased
(GET transaction based on deceased name)

DELETE /transaction:id
(DELETE transaction based on id)

```
## USERS
```
POST /user/nearby
(POST get nearby TPU dalam radius 1500m)

POST /user/searchLocation
(POST get TPU BY LOCATION)

POST /user/getCemetary
(POST get Cemetary by cemetary name)

GET /user/:id
(GET cemetary by id)

```


# |||||||||||||||||||||||||||||||||||||


### POST /admin/login

GET ALL TRANSACTION

_Request Header_
```
{
    "access_token":"<your access token>"
}
```
_Response (200)_
```
[
    {
        "_id": "60d8ad769ef4e609f88e268f",
        "deceasedName": "Jono Maharjono",
        "diedDate": "27062021",
        "bornDate": "27061950",
        "burialDate": "27062021",
        "religion": "Islam",
        "fatherName": "Jono Sudiman",
        "spaceLocation": [
            4,
            2
        ],
        "status": "pending",
        "price": "200000",
        "facility": [
            "Tenda",
            "Keranda"
        ],
        "cemetaryName": "TPU Cisarua",
        "cemetaryId": "60d703835e6fba19f81c9421",
        "payerName": "Salma Samsudin",
        "phoneNumber": "0818989898",
        "email": "salma.samsu@gmail.com",
        "paymentId": ""
    }
]
```

### POST /transaction  

Register for admin

_Request Header_

```
acces:token
```
_Request Body_
```
{
    "deceasedName": "Jono Maharjono",
    "diedDate": "27062021",
    "bornDate": "27061950",
    "burialDate": "27062021",
    "religion": "Islam",
    "fatherName": "Jono Sudiman",
    "spaceLocation": [
        4,
        2
    ],
    "status": "waiting",
    "price": "200000",
    "facility": [
        "Tenda",
        "Keranda"
    ],
    "cemetaryName": "TPU Cisarua",
    "cemetaryId": "60d703835e6fba19f81c9421",
    "payerName": "Salma Samsudin",
    "phoneNumber":"0818989898",
    "email":"salma.samsu@gmail.com",
    "paymentId":""
}
```
_Response (200)_
```
{
    "deceasedName": "Jono Maharjono",
    "diedDate": "27062021",
    "bornDate": "27061950",
    "burialDate": "27062021",
    "religion": "Islam",
    "fatherName": "Jono Sudiman",
    "spaceLocation": [
        4,
        2
    ],
    "status": "pending",
    "price": "200000",
    "facility": [
        "Tenda",
        "Keranda"
    ],
    "cemetaryName": "TPU Cisarua",
    "cemetaryId": "60d703835e6fba19f81c9421",
    "payerName": "Salma Samsudin",
    "phoneNumber": "0818989898",
    "email": "salma.samsu@gmail.com",
    "paymentId": "",
    "_id": "60d95726e3f0ab13405c22c2"
}
```
### POST /xendit/createVA

create VA xendit

_Request Header_

```
access token
```
_Request Body_
```
{
    "transactionId":"60d8b8ef41c45f3bd0b7b5da",
    "bankCode":"BRI",
    "payerName":"Salma Samsudin",
    "expected_amount": 200000,
    "is_closed":true,
    "is_single_use":true
}
```
_Response (200)_
```
{
    "is_closed": true,
    "status": "PENDING",
    "currency": "IDR",
    "owner_id": "60d5aa322a193b7b9dcb4cd9",
    "external_id": "60d8b8ef41c45f3bd0b7b5da",
    "bank_code": "BRI",
    "merchant_code": "26215",
    "name": "Salma Samsudin",
    "account_number": "262159999353269",
    "expected_amount": 200000,
    "is_single_use": true,
    "expiration_date": "2052-06-27T17:00:00.000Z",
    "id": "60d957695cdbf86b93514959"
}
```
## GET /transaction/:id

```
GET Transaction Detail by id
```

_Request Header_
```
{
    "access_token":"<your access token>"
}
```
_Response (200)_
```
[{
    "_id": "60d8b8ef41c45f3bd0b7b5da",
    "deceasedName": "Jono Maharjono",
    "diedDate": "27062021",
    "bornDate": "27061950",
    "burialDate": "27062021",
    "religion": "Islam",
    "fatherName": "Jono Sudiman",
    "spaceLocation": [
        4,
        2
    ],
    "status": "pending",
    "price": "200000",
    "facility": [
        "Tenda",
        "Keranda"
    ],
    "cemetaryName": "TPU Cisarua",
    "cemetaryId": "60d703835e6fba19f81c9421",
    "payerName": "Salma Samsudin",
    "phoneNumber": "0818989898",
    "email": "salma.samsu@gmail.com",
    "paymentId": ""
}]
```

## PUT TRANSACTION ID
headers access token

req params = id transaction

_req.body_
```
{
    "_id": "60d84ddce0f0003eb0c1437d",
    "deceasedName": "Jini Maharjini",
    "diedDate": "27062021",
    "bornDate": "27061950",
    "burialDate": "27062021",
    "religion": "Islam",
    "fatherName": "Jono Sudiman",
    "spaceLocation": [
        4,
        2
    ],
    "status": "waiting",
    "price": "200000",
    "facility": [
        "Tenda",
        "Keranda"
    ],
    "cemetaryName": "TPU Cisarua",
    "cemetaryId": "60d703835e6fba19f81c9421",
    "payerName": "Sandia Aga",
    "phoneNumber": "081388484848",
    "email": "sandi.aga@gmail.com",
    "paymentId": ""
}
```
_RESPONSE_
```
{
    "message": "Transaction data updated"
}
```

## POST transaction/cemetary
get All transaction based on cemetary name

_Request Header_
```
{
    "access_token":"<your access token>"
}
```
_Request Body
```
{
    "cemetaryName":"TPU Cisarua"
}   

```
_Response (200)_
```
    {
        "_id": "60d8ad769ef4e609f88e268f",
        "deceasedName": "Jono Maharjono",
        "diedDate": "27062021",
        "bornDate": "27061950",
        "burialDate": "27062021",
        "religion": "Islam",
        "fatherName": "Jono Sudiman",
        "spaceLocation": [
            4,
            2
        ],
        "status": "pending",
        "price": "200000",
        "facility": [
            "Tenda",
            "Keranda"
        ],
        "cemetaryName": "TPU Cisarua",
        "cemetaryId": "60d703835e6fba19f81c9421",
        "payerName": "Salma Samsudin",
        "phoneNumber": "0818989898",
        "email": "salma.samsu@gmail.com",
        "paymentId": ""
    }
    ]
```

## GET /transaction/cemetary/:id

id =  cemetary id

_Request Header_
```
{
    "access_token":"<your access token>"
}
```
_Request Body
```

```
_Response (200)_
```
[
    {
        "_id": "60d8ad769ef4e609f88e268f",
        "deceasedName": "Jono Maharjono",
        "diedDate": "27062021",
        "bornDate": "27061950",
        "burialDate": "27062021",
        "religion": "Islam",
        "fatherName": "Jono Sudiman",
        "spaceLocation": [
            4,
            2
        ],
        "status": "pending",
        "price": "200000",
        "facility": [
            "Tenda",
            "Keranda"
        ],
        "cemetaryName": "TPU Cisarua",
        "cemetaryId": "60d703835e6fba19f81c9421",
        "payerName": "Salma Samsudin",
        "phoneNumber": "0818989898",
        "email": "salma.samsu@gmail.com",
        "paymentId": ""
    }
]
```
## POST /transaction/deceased

```
get transaction by deceased name
```

_Request Header_
```
{
    "access_token":"<your access token>"
}
```
_Req Body_
```
{
    "deceasedName": "Jini Maharjini"
}
```


_Response (200)_
```
{
    "_id": "60d84ddce0f0003eb0c1437d",
    "deceasedName": "Jini Maharjini",
    "diedDate": "27062021",
    "bornDate": "27061950",
    "burialDate": "27062021",
    "religion": "Islam",
    "fatherName": "Jono Sudiman",
    "spaceLocation": [
        4,
        2
    ],
    "status": "waiting",
    "price": "200000",
    "facility": [
        "Tenda",
        "Keranda"
    ],
    "cemetaryName": "TPU Cisarua",
    "cemetaryId": "60d703835e6fba19f81c9421",
    "payerName": "Sandia Aga",
    "phoneNumber": "081388484848",
    "email": "sandi.aga@gmail.com",
    "paymentId": ""
}
```

## DELETE /transaction/:id
Delete transaction
```

_Request Header_
```
{
    "access_token":"<your access token>"
}
```
_Request Params_
```
req.params = <id to put update into>

```
_Response (200)_
```
{
    "message": "Transaction data deleted"
}
## POST /user/nearby

```
GET TPU FROM NEARBY LOCATION (1500m) 
```

_Request Header_
```
{
    "access_token":"<your access token>"
}
```
_Request Params_
```
req.params = <id to put update into>

```
_req body_
```
{
    "latitude" : "-6.4286981999999995",
    "longitude" : "106.8265268"
}
```
_Response (200)_
```
[
    {
        "business_status": "OPERATIONAL",
        "geometry": {
            "location": {
                "lat": -6.4376596,
                "lng": 106.8227613
            },
            "viewport": {
                "northeast": {
                    "lat": -6.436337070107278,
                    "lng": 106.8239635298927
                },
                "southwest": {
                    "lat": -6.439036729892722,
                    "lng": 106.8212638701073
                }
            }
        },
        "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/cemetery_grave-71.png",
        "name": "Tempat Pemakaman Umum Kalimulya 1",
        "opening_hours": {
            "open_now": true
        },
        "photos": [
            {
                "height": 2448,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/113450437029798488745\">Agus Surya</a>"
                ],
                "photo_reference": "Aap_uEB8FsjUlk5BsQyRM1eBfsnf7nB6tXPwapYbuRB4vtBoh0d9Sv0g3q1uWROM7QOWzMKXL8NLaT1niH8Mrcr9BarhlbbzVrEi6fyUh1YdyjwU4H8SlKA8pSLIpNHpZqowQLSJMf1dniSN2E5AFLwEdE2RzjyzUXgG0HutQRENw4OgQwL3",
                "width": 3264
            }
        ],
        "place_id": "ChIJsU84TCHqaS4R6JrO5f4WImk",
        "plus_code": {
            "compound_code": "HR6F+W4 Kalimulya, Depok City, West Java",
            "global_code": "6P58HR6F+W4"
        },
        "rating": 4.8,
        "reference": "ChIJsU84TCHqaS4R6JrO5f4WImk",
        "scope": "GOOGLE",
        "types": [
            "cemetery",
            "point_of_interest",
            "establishment"
        ],
        "user_ratings_total": 4,
        "vicinity": "Jl. Raya Kebon Duren, Kalimulya, Kalimulya, Kota Depok"
    }
]
```

## POST /user/searchLocation
get tpu from location


_Request Header_
```
{
    "access_token":"<your access token>"
}
```
_Req Body_
```
{
    "location":"depok"
}
```
_Response (200)_
```
[
    {
        "business_status": "OPERATIONAL",
        "formatted_address": "Jl. TPU Kalimulya III, RT.03/RW.06, Kalimulya, Kec. Cilodong, Kota Depok, Jawa Barat 16413, Indonesia",
        "geometry": {
            "location": {
                "lat": -6.433477099999999,
                "lng": 106.8149514
            },
            "viewport": {
                "northeast": {
                    "lat": -6.432137820107278,
                    "lng": 106.8163172298927
                },
                "southwest": {
                    "lat": -6.434837479892722,
                    "lng": 106.8136175701073
                }
            }
        },
        "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/cemetery_grave-71.png",
        "name": "Pemakaman Kalimulya III",
        "opening_hours": {
            "open_now": true
        },
        "photos": [
            {
                "height": 960,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/103710664091301396470\">A Google User</a>"
                ],
                "photo_reference": "Aap_uED4hEMMoJkO1Uz9IMntcHo12iIEsPQAKPcb5cvwS744HR_-M3iNkD_DAn31sqifzPDO9pdbrWV8Llt99rfpWx5XQD01vIpQsdQCx6_yJxzmQMx-X2KCIV2Ft5R2Fcy_HyRfQzN25y5flU99p2Gcat4-f03WtwmlkLbXVXKNGU5-4nlD",
                "width": 576
            }
        ],
        "place_id": "ChIJZe7604vpaS4RkWf8Vl9uutY",
        "plus_code": {
            "compound_code": "HR87+JX Kalimulya, Depok City, West Java",
            "global_code": "6P58HR87+JX"
        },
        "rating": 4.3,
        "reference": "ChIJZe7604vpaS4RkWf8Vl9uutY",
        "types": [
            "cemetery",
            "point_of_interest",
            "establishment"
        ],
        "user_ratings_total": 16
    }
]
```

## POST /user/getCemetary
_Request Header_
```
{
    "access_token":"<your access token>"
}
```

_Req Body_

```
{
    "locationName": "TPU Cisalah"
}
```
_response_
```
[
    {
        "business_status": "OPERATIONAL",
        "formatted_address": "Jl. TPU Kalimulya III, RT.03/RW.06, Kalimulya, Kec. Cilodong, Kota Depok, Jawa Barat 16413, Indonesia",
        "geometry": {
            "location": {
                "lat": -6.433477099999999,
                "lng": 106.8149514
            },
            "viewport": {
                "northeast": {
                    "lat": -6.432137820107278,
                    "lng": 106.8163172298927
                },
                "southwest": {
                    "lat": -6.434837479892722,
                    "lng": 106.8136175701073
                }
            }
        },
        "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/cemetery_grave-71.png",
        "name": "Pemakaman Kalimulya III",
        "opening_hours": {
            "open_now": true
        },
        "photos": [
            {
                "height": 960,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/103710664091301396470\">A Google User</a>"
                ],
                "photo_reference": "Aap_uED4hEMMoJkO1Uz9IMntcHo12iIEsPQAKPcb5cvwS744HR_-M3iNkD_DAn31sqifzPDO9pdbrWV8Llt99rfpWx5XQD01vIpQsdQCx6_yJxzmQMx-X2KCIV2Ft5R2Fcy_HyRfQzN25y5flU99p2Gcat4-f03WtwmlkLbXVXKNGU5-4nlD",
                "width": 576
            }
        ],
        "place_id": "ChIJZe7604vpaS4RkWf8Vl9uutY",
        "plus_code": {
            "compound_code": "HR87+JX Kalimulya, Depok City, West Java",
            "global_code": "6P58HR87+JX"
        },
        "rating": 4.3,
        "reference": "ChIJZe7604vpaS4RkWf8Vl9uutY",
        "types": [
            "cemetery",
            "point_of_interest",
            "establishment"
        ],
        "user_ratings_total": 16
    }
]
```

