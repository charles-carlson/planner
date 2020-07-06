var TodoService = require('../services/todo');

exports.addTodo = async function(req,res,next){
    try{
        TodoService.addTodo(req.session.uid,req.body.info)
        return res.status(200).json({message:'Todo added'})
    }catch(e){
        console.error(e);
        return res.status(400).json({message:'error in creating Todo'})
    }
}