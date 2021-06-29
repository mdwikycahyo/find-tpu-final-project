function authorization (req, res, next){
    if (req.user.role ==="keeper"){
        next()
    }
    else{
        next({name:"Forbidden", message:"Role not authorized to access data"})
    }
} 

module.exports = authorization