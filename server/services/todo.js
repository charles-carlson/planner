var {Todo} = require('../db/sequelize')
exports.addTodo = async function(id,todo){
    Todo.create({tid:id,info:todo})
    .then(()=>{
        console.log('added Todo');
    }).catch(e=>{
        console.error(e);
        throw e;
    });
}