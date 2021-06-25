# RESTful Endpoints

Admin

Admin
```
POST/admin/login
```
Keeper
```
GET /keeper/
GET /keeper/:id
POST /keeper/
PUT /keeper/:id
DELETE /keeper/:id

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
## POST /keeper/


```
Register for Keeper
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
    {
        "message": "User created",
        "status-code": 201,
        "data": {
            "id": <given id>,
            "email": <posted email>,
            "role": <posted role>
        }
    }
}
```

_Response (400 - Bad Request)_
```
{
  "message": "Email and password are required"
}

```
_Response (500 - Internal server error)
```
{
  "message": "Internal server error"
}
```
## GET /keeper/

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
        tbd
    },
    {
        tbd
    }
]
```

_Response (500 - Internal Server Error)
```
{
  "message": "Internal Server Error"
}
```

## GET /keeper/:id

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
    "message": "keeper data edited",
    "data": {
        tbd
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

## PUT /keeper/:id

```
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
    tbd
}
```
_Response (200)_
```
{
    "message": "Keeper data edited",
    "data": {
        tbd
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
## DELETE /keeper/:id

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