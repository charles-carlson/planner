const {DataTypes} = require('sequelize');
const crypto = require('crypto');

module.exports = (sequelize) =>{
    return sequelize.define('user',{
        uid:{
            type:DataTypes.UUID,
            defaultValue: function(){
                return crypto.randomBytes(16).toString('hex');
            },
            primaryKey: true
        },
        username:{
            type:DataTypes.TEXT,
            unique: true
        },
        password:{
            type:DataTypes.STRING(128)
        },
        salt:{
            type:DataTypes.STRING(128)
        }
    })
}








/*
    async login(){
        //authentication happens here
        const {rows} = await db.run('SELECT id,username,password,salt FROM user WHERE username=?',[this.username],(err)=>{
            if(err){
                console.error('username is incorrect');
            }
            else{
                console.log('retrieved user');
            }
        });
        var attempt = await argon2i.hash(this.password,rows[0].salt)
        if(attempt === rows[0].password){
            console.log('user login successful');
            return true;
        }
        else{
            console.log('user login failed');
            return false;
        }
    }
    delete(){
    //TODO: delete account
    }
}
*/
