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
        UserService.loginUser(req.body.username,req.body.password)
        req.session.username = req.body.username;
        req.isLoggedIn = true;
        req.session.save();
        return res.status(200).json({status:200,message:'User is logged in',username:req.body.username,session:req.session})
    }catch(e){
        return res.status(400).json({status:400,message:e.message})
    }
}