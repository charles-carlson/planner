const {Sequelize} = require('sequelize');
const UserModel = require('../models/users');
const TodoModel = require('../models/todo');

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './database.sqlite'
})

const User = UserModel(sequelize);
const Todo = TodoModel(sequelize)

User.hasMany(Todo,{
    foreignKey:'tid'
})
Todo.belongsTo(User)

sequelize.sync({force:true}).then(()=>{
    console.log('Database and Tables created with sequelize')
})

try{
    sequelize.authenticate();
    console.log('connected to db');
}catch(e){
    console.error(e)
}

module.exports = {
    User,
    Todo
};