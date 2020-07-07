var {Todo,User} = require('../db/sequelize');
const e = require('express');
exports.addTodo = async function(username,todo){
    User.findAll({
        where:{username:username},raw:true
    }).then(data=>{
        Todo.create({tid:data[0].uid,info:todo})
        .then(()=>{
            console.log('added Todo');
        }).catch(e=>{
            console.error(e);
            throw e;
        })
    }).catch(e=>{
        console.error(e);
        throw e;
    })
}
