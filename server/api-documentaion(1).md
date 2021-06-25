# RESTful Endpoints

Admin

Admin
```
POST/admin/login
```
Pemakaman
```
GET /pemakaman/
GET /pemakaman/:id
POST /pemakaman/
PUT /pemakaman/:id
DELETE /pemakaman/:id
```
## POST /admin/login

```
Login for admin
```
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
_Response (400 - Bad Request)_
```
{
  "message": "Email and password are required"
}

```
_Response (403 - Forbidden)_
```
{
  "message": "Invalid email/password"
}
```
_Response (404 - Resource Not Found)_
```
{
  "message": "Invalid email/password"
}
```
_Response (500 - Internal server error)
```
{
  "message": "Internal server error"
}
```

## GET /cart/

```
GET All cart
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
        "UserId":1,
        "ProductId":1,
        "Quantity":3
    },
    {
        "UserId":1,
        "ProductId":2,
        "Quantity":3
    }
]
```

_Response (500 - Internal Server Error)
```
{
  "message": "Internal Server Error"
}
```
## POST /cart/

```
POST cart
```

_Request Header_
```
{
    "access_token":"<your access token>"
}
```
_Request Body_
```
{
    "UserId":<"UserId to get insert into">,
    "ProductId":<"ProductId to get insert into">,
    "Quantity":<"Quantity to get insert into">
}
```
_Response (201)_
```
{
    "message": "Product added",
    "data": {
        "id": <given id>,
        "UserId": <posted UserId>,
        "ProdutId": <posted ProductId>,
        "Quantity": <posted Quantity>
    }
}
```
_Response (200)_
```
{
    "message": "Cart items edited",
    "data": {
        "id": <given id>,
        "UserId": <posted UserId>,
        "ProdutId": <posted ProductId>,
        "Quantity": <posted Quantity>
    }
}
```
_Response (401 - Unauthorized)_
```
{
    "message": "Login First"
}
```
_Response (403 - Forbidden)_
```
{
    "message": "Role not authorized to access data"
}
```

_Response (500 - Internal Server Error)_
```
{
  "message": "Internal Server Error"
}
```
## PUT /cart/:id

```
Update cart items
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
    "UserId":<"UserId to get insert into">,
    "ProductId":<"ProductId to get insert into">,
    "Quantity":<"Quantity to get insert into">
}
```
_Response (200)_
```
{
    "message": "Cart items edited",
    "data": {
        "id": <given id>,
        "UserId": <posted UserId>,
        "ProdutId": <posted ProductId>,
        "Quantity": <posted Quantity>
    }
}
```
_Response (401 - Unauthorized)_
```
{
    "message": "Login First"
}
```
_Response (403 - Forbidden)_
```
{
    "message": "Role not authorized to access data"
}
```

_Response (500 - Internal Server Error)_
```
{
  "message": "Internal Server Error"
}
```
## DELETE /cart/:id

```
DELETE cart
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
    "message": "Cart Items deleted"
}
```
_Response (401 - Unauthorized)_
```
{
    "message": "Login First"
}
```
_Response (403 - Forbidden)_
```
{
    "message": "Role not authorized to access data"
}
```

_Response (500 - Internal Server Error)_
```
{
  "message": "Internal Server Error"
}
```