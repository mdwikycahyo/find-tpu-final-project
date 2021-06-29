function authorization (req, res, next){
    if (req.user.role ==="admin"){
        next()
    }
    else{
        next({name:"Forbidden", message:"Role not authorized to access data"})
    }
} 

module.exports = authorization