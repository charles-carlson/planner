var UserService = require('../services/users')

exports.addUser = async function(req,res,next){
    try{
        UserService.addUser(req.body.username,req.body.password)
        return res.status(200).json({status:200,message:'User created'})
    }catch(e){
        return res.status(400).json({status:400,message:e.message})
    }
}

exports.loginUser = async function(req,res,next){
    try{
        console.log(req.body.username)
        UserService.loginUser(req.body.username,req.body.password)
        req.session.username = req.body.username
        req.session.isLoggedIn = true;
        req.session.save();
        return res.status(200).json({status:200,message:'User is logged in',session:req.session})
    }catch(e){
        return res.status(400).json({status:400,message:e.message})
    }
}
exports.getUser = async function(req,res,next){
    try{
        console.log(req.session.username)
        console.log('retrieving user from session')
        if(req.session.isLoggedIn == true){
            return res.status(200).json(req.session.username)
        }
        else{
            return res.status(400).json({status:400,message:'user is not logged in'})
        }
    }catch(e){
        console.error(e)
        return res.status(403).json({message:e.message})
    }

}
exports.logout = async function(req,res,next){
    if(req.session){
        req.session.destroy(function(err){
            if(err){
                console.log(err);
                throw err;
            }else{
                console.log('user is logged out')
                return res.status(200)
            }
        })
    }
}