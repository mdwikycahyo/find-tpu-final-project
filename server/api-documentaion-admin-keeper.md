# RESTful Endpoints

## Admin

```
POST/admin/login
(login untuk admin)

POST/admin/register
(register untuk admin)

GET /admin/
(get all data kuburan/keeper)

GET /admin/:id
(get data kuburan/id)

POST /admin/
(create data kuburan/keeper)

PATCH /admin/:id
(mengubah data kuburan berdasarkan id kuburan sebagai param
dan body: kuburan space id dan posisi yang mau digunakan
)

PUT /admin/:id
(mengubah data kuburan/ cemetary)

DELETE /admin/:id
(menghapus data kuburan)




```
## Keeper
```
POST/keeper/login
(login data kuburan)

POST /keeper/status/
(GET ALL status from tpu id)

PATCH /transaction/changeStatus/:id
(Change transaction kuburan status by params id)

```




# |||||||||||||||||||||||||||||||||||||


### POST /admin/login

Login for admin

_Request Header_
```
not needed
```
_Request Body_
```
{
    "email":"<email to get insert into>",
    "password":"<password to get insert into>"
}
```
_Response (200)_
```
{
  "access_token" : access_token
}
```

### POST /admin/register

Register for admin

_Request Header_

```
not needed
```
_Request Body_
```
{
    "email":"<email to get insert into>",
    "password":"<password to get insert into>"
    "role":"<role to get insert into>
}
```
_Response (200)_
```
{
    "email": "admin@gmail.com",
    "password": "$2a$08$s79zU1JrvKpL8DkgfF/MYOOulxbe6RmBatVMKpmmXPp74piPAQb02",
    "role": "admin",
    "_id": "60d93dbd95b0bb67ffead494"
}
```
## GET /admin/

```
GET All keeper data
```

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
        "_id": "60d703835e6fba19f81c9421",
        "cemetaryName": "TPU Cisalah",
        "cemetaryLocation": "Ciliwung Raya",
        "width": 15,
        "height": 15,
        "latitude": "-6.4286981999999995",
        "longitude": "106.8265268",
        "image_url": [
            "https://cdn-2.tstatic.net/surabaya/foto/bank/images/fakta-di-balik-video-kuburan-keluarkan-api-misterius-viral-di-instagram.jpg"
        ],
        "price": "800000",
        "keeperName": "Tony Stork",
        "keeperEmail": "tony.stork@gmail.com",
        "keeperPassword": "$2a$08$fjTn5ybZ8tiNhHR0hcJKROJOg3eVnHCk6hFxNzuLRypdPMXncBPZ.",
        "keeperPhone": "089999999999",
        "spaceLeft": 224,
        "spaceFilled": 1,
        "facilities": [
            "Tenda",
            "Bunga",
            "Air"
        ],
        "cemetarySpaceId": "60d703835e6fba19f81c9420"
    }
]
```

## GET /admin/:id

```
GET keeper by id
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
    "_id": "60d703835e6fba19f81c9421",
    "cemetaryName": "TPU Cisalah",
    "cemetaryLocation": "Ciliwung Raya",
    "width": 15,
    "height": 15,
    "latitude": "-6.4286981999999995",
    "longitude": "106.8265268",
    "image_url": [
        "https://cdn-2.tstatic.net/surabaya/foto/bank/images/fakta-di-balik-video-kuburan-keluarkan-api-misterius-viral-di-instagram.jpg"
    ],
    "price": "800000",
    "keeperName": "Tony Stork",
    "keeperEmail": "tony.stork@gmail.com",
    "keeperPassword": "$2a$08$fjTn5ybZ8tiNhHR0hcJKROJOg3eVnHCk6hFxNzuLRypdPMXncBPZ.",
    "keeperPhone": "089999999999",
    "spaceLeft": 224,
    "spaceFilled": 1,
    "facilities": [
        "Tenda",
        "Bunga",
        "Air"
    ],
    "cemetarySpaceId": "60d703835e6fba19f81c9420",
    "cemetarySpace": OBJECT SPACE
}
```

## POST /admin/

```
Create data kuburan
```

_Request Header_
```
{
    "access_token":"<your access token>"
}
```
_Request Body
```
{
            "cemetaryName": "Tempat Pemakaman Kalimulya",
            "cemetaryLocation": "Ciliwung Raya",
            "width":10,
            "height":10,
            "cemetaryType": "",
            "latitude": "-6.4286981999999995",
            "longitude": "106.8265268",
            "image_url": ["https://cdn-2.tstatic.net/surabaya/foto/bank/images/fakta-di-balik-video-kuburan-keluarkan-api-misterius-viral-di-instagram.jpg"],
            "price": "800000",
            "keeperName": "Natalira Romanov",
            "keeperEmail": "natalia.roman@gmail.com",
            "keeperPassword": "nataliaroman",
            "keeperPhone": "089999999999",
            "spaceLeft": 225,
            "spaceFilled": 0,
            "facilities": ["Tenda", "Bunga", "Air"]
}

```
_Response (200)_
```
{
    "_id": "60d703835e6fba19f81c9421",
    "cemetaryName": "TPU Cisalah",
    "cemetaryLocation": "Ciliwung Raya",
    "width": 15,
    "height": 15,
    "latitude": "-6.4286981999999995",
    "longitude": "106.8265268",
    "image_url": [
        "https://cdn-2.tstatic.net/surabaya/foto/bank/images/fakta-di-balik-video-kuburan-keluarkan-api-misterius-viral-di-instagram.jpg"
    ],
    "price": "800000",
    "keeperName": "Tony Stork",
    "keeperEmail": "tony.stork@gmail.com",
    "keeperPassword": "$2a$08$fjTn5ybZ8tiNhHR0hcJKROJOg3eVnHCk6hFxNzuLRypdPMXncBPZ.",
    "keeperPhone": "089999999999",
    "spaceLeft": 224,
    "spaceFilled": 1,
    "facilities": [
        "Tenda",
        "Bunga",
        "Air"
    ],
    "cemetarySpaceId": "60d703835e6fba19f81c9420",
    "cemetarySpace": OBJECT SPACE
}
```
## PATCH /admin/:id

```
Patch keeper data
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
_Req Body_
```
{
    "cemetarySpaceId": "60d703835e6fba19f81c9420",
    "position": [1,1]
}
```


_Response (200)_
```
{
    "message": "Cemetary spaced filled"
}
```

## PUT /admin/:id
Update keeper data
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
_Request Body_
```
{
            "cemetaryName": "TPU Cisalah",
            "cemetaryLocation": "Ciliwung Raya",
            "width":15,
            "height":15,
            "cemetaryType": "",
            "latitude": "-6.4286981999999995",
            "longitude": "106.8265268",
            "image_url": ["https://cdn-2.tstatic.net/surabaya/foto/bank/images/fakta-di-balik-video-kuburan-keluarkan-api-misterius-viral-di-instagram.jpg"],
            "price": "800000",
            "keeperName": "Tony Stork",
            "keeperEmail": "tony.stork@gmail.com",
            "keeperPassword": "tonystork",
            "keeperPhone": "089999999999",
            "spaceLeft": 225,
            "spaceFilled": 0,
            "facilities": ["Tenda", "Bunga", "Air"]
}
```
_Response (200)_
```
{
    "message": "Data updated"
}
## DELETE /admin/:id

```
DELETE keeper 
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
    "message": "keeper data deleted"
}
```


### POST /keeper/login

login for keeper

_Request Header_

```
not needed
```
_Request Body_
```
{
    "email":"<email to get insert into>",
    "password":"<password to get insert into>"
}
```
_Response (200)_
```
{
  "access_token" : access_token
}
```


(BAKAL DIREFACTOR)
## POST /keeper/status/
(GET ALL transaction STATUS FROM TPU ID)

```
POST GET STATUS FROM TPU 
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
    "cemetaryId": "60d703835e6fba19f81c9421",
    "status": "waiting"
}
```
_Response (200)_
```
{
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
}
```

## PATCH /transaction/changeStatus/:id
_Request Header_
```
{
    "access_token":"<your access token>"
}
```
_Req Params_
```
id: transaction id 
```

_Req Body_

(cancel/waiting/done/pending)
```
{
    "status": "cancel" 
}
```
_response_
```
{
    "message": "status updated"
}
```

