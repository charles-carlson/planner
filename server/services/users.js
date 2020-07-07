var {User} = require('../db/sequelize')
const { argon2i } = require('argon2-ffi');
const crypto = require('crypto');
var session = require("express-session"); 
exports.addUser = async function(username,password){
    crypto.randomBytes(32,function(err,salt){
        if(err) throw err;
        argon2i.hash(password,salt)
        .then(hash=>{
            User.create({
                username:username,
                password:hash,
                salt:salt
            }).then(()=>{
                console.log('User created');
            }).catch(e=>{
                console.error(e);
                throw e;
            })
        })
        .catch(e=>{
            console.error(e);
            throw e;
        });
    });
}

exports.loginUser = async function(username,password){
    User.findAll({
        where:{
            username:username
        },
        raw:true
    })
    .then(data=>{
        argon2i.hash(password,data[0].salt)
        .then(hash=>{
            if(hash == data[0].password){
                console.log('User authenticated')
                console.log(data[0].uid)
            }
            else{
                throw Error('incorrect password or username')
            }
        })
        .catch(e=>{
            console.error(e)
            throw Error('could not authenticate')
        })
    })
    .catch(e=>{
        console.error(e)
        throw Error('error could not find user')
    })
}