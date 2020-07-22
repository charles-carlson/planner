var TodoService = require('../services/todo');
var session = require("express-session"); 
exports.addTodo = async function(req,res,next){
    try{
        console.log(req.session.username);
        console.log(req.body.todo)
        TodoService.addTodo(req.session.username,req.body.todo)
        console.log('made through try')
        return res.status(200).json({status:200,message:'Todo added'})
    }catch(e){
        console.error(e);
        return res.status(400).json({status:400,message:'error in creating Todo'})
    }
}
exports.editTodo = async function(req,res,next){
    try{
        TodoService.editTodo(req.session.username,req.body.todo)
        return res.status(200).json({status:200,message:'Todo updated'})
    }catch(e){
        console.error(e);
        return res.status(400).json({status:400,message:'Could update Todo'})
    }
}
exports.deleteTodo = async function(req,res,next){
    try{
        TodoService.editTodo(req.session.username,req.body.todo)
        return res.status(200).json({status:200,message:'Todo updated'})
    }catch(e){
        console.error(e);
        return res.status(400).json({status:400,message:'Could update Todo'})
    }
}