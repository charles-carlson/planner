const {DataTypes} = require('sequelize')

module.exports = (sequelize) => {
    return sequelize.define('todo',{
        tid:{
            type:DataTypes.INTEGER
        },
        date:{
            type:DataTypes.DATEONLY
        },
        time:{
            type:DataTypes.TIME
        },
        info:{
            type:DataTypes.TEXT
        }
    })
}

