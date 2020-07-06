const {DataTypes} = require('sequelize')

module.exports = (sequelize) => {
    return sequelize.define('todo',{
        tid:{
            type:DataTypes.INTEGER
        },
        info:{
            type:DataTypes.TEXT
        }
    })
}

