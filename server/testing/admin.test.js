const request = require('supertest')

describe('')

let adminData = {
    email:"admin@gmail.com",
    password:"admin",
    role:"admin"
}
let loginData = {
    email:"admin@gmail.com",
    password:"admin"
}
let loginFailed1 = {
    email : "admin@gmail.com",
    password : "damin"
}
let loginFailed2 = {
    email : "dam@gmail.com",
    password : "damin"
}
let loginFailed3 = {
    email : "",
    password : ""
}

describe('Login | Success Case', () =>{
    test('Mengirimkan akses token', (done) =>{
        request(app)
        .post('/login/admin')
        .send(loginData)
        .end(function(err, res)){
            if(err) return done(err)
            expect(res.status).toBe(200)
            expect(res.body).toHaveProperty('access_token', expect.any(String))
        }
    })
})

describe('Login | Failed Case', ()=>{
    test('Error 403: tidak diauthorisasi', (done)=>{
        request(app)
        .post('/login/admin')
        .send(loginFailed1)
        .end(function(err, res){
            if(err) return done(err)
            expect(res.status).toBe(403)
            expect(res.body).toHaveProperty('pesan', 'Email / password yang anda masukkan salah')
            done()
        })
    })
    test('Error 404: data tidak ditemukan', (done)=>{
        request(app)
        .post('/login/admin')
        .send(loginFailed2)
        .end(function(err, res){
            if(err) return done(err)
            expect(res.status).toBe(404)
            expect(res.body).toHaveProperty('pesan', 'Email / password yang anda masukkan salah')
            done()
        })
    })
    test('Should send 400 Bad Request', (done)=>{
        request(app)
        .post('/login/admin')
        .send(loginFailed3)
        .end(function(err, res){
            if(err) return done(err)
            expect(res.status).toBe(400)
            expect(res.body).toHaveProperty('pesan', 'Email / password harus diisi')
            done()
        })
    })
})

describe('Get All | Succes Case', ()=>{
    test("Mengirimkan data pemakaman", (done)=>{
        request(app)
        .get("/pemakaman/")
        .set("access_token", adminInitialToken)
        .end(function (err, res) {
            if(err) return done(err)
            expect(res.status).toBe(200)
            expect(res.body).toEqual(expect.any(Array))
            done()
        })
    })
})

describe('Get pemakaman by id | Succes Case', ()=>{
    test("Mengirimkan objek pemakaman", (done)=>{
        request(app)
        .get("/pemakaman/:id")
        .set("access_token", adminInitialToken)
        .end(function (err, res) {
            if(err) return done(err)
            expect(res.status).toBe(200)
            expect(res.body).toEqual(expect.any(Object))
            done()
        })
    })
})

describe('Get id | Failed Case', ()=>{
    test("Should send 404 not found", (done)=>{
        request(app)
        .get("/pemakaman/100000")
        .set("access_token", adminInitialToken)
        .end(function (err, res) {
            if(err) return done(err)
            expect(res.status).toBe(404)
            expect(res.body).toHaveProperty('message', 'Email and password are required')
            done()
        })
    })
})

describe('Create | Success Case', ()=>{
    test('Should send message and object data', (done)=>{
        request(app)
        .post('/products/')
        .send(productData)
        .set("access_token", adminInitialToken)
        .end(function(err, res){
            if(err) return done(err)
            console.log(res.body,"<<<<<<<<<<<<<<<<<<<<<<<<<<");
            idCreated = res.body.data.id
            expect(res.status).toBe(201)
            expect(res.body).toHaveProperty("message", "Product Created")
            expect(res.body).toHaveProperty('data', expect.any(Object))
            expect(res.body.data).toHaveProperty('name', productData.name)
            expect(res.body.data).toHaveProperty('image_url', productData.image_url)
            expect(res.body.data).toHaveProperty('price', productData.price)
            expect(res.body.data).toHaveProperty('stock', productData.stock)
            expect(res.body.data).toHaveProperty('Category_ID', productData.Category_ID)
            done()
        })
    })
})

describe('Create | Failed Case', ()=>{
    test("No Access Token Should Send 401", (done)=>{
        request(app)
        .post('/products/')
        .send(productData)
        .end(function(err, res){
            if(err) return done(err)
            expect(res.status).toBe(401)
            expect(res.body).toHaveProperty("message","Login First")
            done()
        })
    })
    test("Wrong Role", (done)=>{
        request(app)
        .post('/products/')
        .send(productData)
        .set("access_token", userInitialToken)
        .end(function(err, res){
            if(err) return done(err)
            expect(res.status).toBe(403)
            expect(res.body).toHaveProperty("message", "Role not authorized to access data")
            done()
        })
    })

    test("Required field ", (done)=>{
        const expected = ["Name is required", "Validation min on price failed", "Validation min on stock failed"]
        request(app)
        .post("/products/")
        .send(createFailed1)
        .set("access_token", adminInitialToken)
        .end(function(err, res){
            if(err) return done(err)
            expect(res.status).toBe(400)
            expect(res.body.error).toEqual(expect.arrayContaining(expected))
            done()
        })
    })

    test("Must a number", (done)=>{
        const expected = []
        request(app)
        .post("/products/")
        .send(createFailed2)
        .set("access_token", adminInitialToken)
        .end(function(err,res){
            if(err) done(err)
            expect(res.status).toBe(400)
            expect(res.body.error).toEqual(expect.arrayContaining(expected))
            done()
        })
    })
})

describe('Update | Success Case', ()=>{
    test("Should send message and object data", (done)=>{
        request(app)
        .put("/products/2")
        .send(putProductData)
        .set("access_token", adminInitialToken)
        .end(function(err, res){
            if(err) return done(err)
            expect(res.status).toBe(201)
            expect(res.body).toHaveProperty("message", "Product Edited")
            expect(res.body).toHaveProperty('data', expect.any(Object))
            expect(res.body.data).toHaveProperty('name', putProductData.name)
            expect(res.body.data).toHaveProperty('image_url', putProductData.image_url)
            expect(res.body.data).toHaveProperty('price', putProductData.price)
            expect(res.body.data).toHaveProperty('stock', putProductData.stock)
            expect(res.body.data).toHaveProperty('Category_ID', putProductData.Category_ID)
            done()
        })
    })
})

describe('Update | Failed Case', ()=>{
    test("No Access Token Should Send 401", (done)=>{
        request(app)
        .put('/products/2')
        .send(putProductData)
        .end(function(err, res){
            if(err) return done(err)
            expect(res.status).toBe(401)
            expect(res.body).toHaveProperty("message","Login First")
            done()
        })
    })
    test("Wrong Role", (done)=>{
        request(app)
        .put('/products/2')
        .send(putProductData)
        .set("access_token", userInitialToken)
        .end(function(err, res){
            if(err) return done(err)
            expect(res.status).toBe(403)
            expect(res.body).toHaveProperty("message", "Role not authorized to access data")
            done()
        })
    })
    test("Required field ", (done)=>{
        const expected = ["Name is required", "Validation min on price failed", "Validation min on stock failed"]
        request(app)
        .put("/products/2")
        .send(putFailed1)
        .set("access_token", adminInitialToken)
        .end(function(err, res){
            if(err) return done(err)
            expect(res.status).toBe(400)
            expect(res.body.error).toEqual(expect.arrayContaining(expected))
            done()
        })
    })
    test("Must a number", (done)=>{
        const expected = []
        request(app)
        .post("/products/")
        .send(putFailed2)
        .set("access_token", adminInitialToken)
        .end(function(err,res){
            if(err) done(err)
            expect(res.status).toBe(400)
            expect(res.body.error).toEqual(expect.arrayContaining(expected))
            done()
        })
    })
})

describe("Delete | Success Case", ()=>{
    test("Delete", (done)=>{
        request(app)
        .delete(`/products/${idCreated}`)
        .set("access_token", adminInitialToken)
        .end(function(err, res){
            if(err) return done(err)
            expect(res.status).toBe(200)
            expect(res.body).toHaveProperty("message", "Product Deleted")
            done()
        })
    })
})
describe("Delete | Failed Case", ()=>{
    test("Delete", (done)=>{
        request(app)
        .delete(`/products/${idCreated}`)
        .end(function(err, res){
            if(err) return done(err)
            expect(res.status).toBe(401)
            expect(res.body).toHaveProperty("message","Login First")
            done()
        })
    })
    test("Wrong Role", (done)=>{
        request(app)
        .delete(`/products/${idCreated}`)
        .set("access_token", userInitialToken)
        .end(function(err, res){
            if(err) return done(err)
            expect(res.status).toBe(403)
            expect(res.body).toHaveProperty("message", "Role not authorized to access data")
            done()
        })
    })
})

