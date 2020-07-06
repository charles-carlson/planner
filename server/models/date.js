const {DataTypes} = require('sequelize')
const sequelize = require('../db/sequelize')

module.exports = (sequelize) =>{
    return sequelize.define('day',{
        dayId:{
            type:DataTypes.INTEGER
        },
        day:{
            type:DataTypes.DATEONLY
        }
    })
}