const sqlite3 = require('sqlite3').verbose();

var userTable = `CREATE TABLE user(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT UNIQUE,
    password VARCHAR(125),
    salt VARCHAR(128));`
    
var todoTable = `CREATE TABLE todo(
        tid INTEGER NOT NULL,
        date TEXT,
        time TEXT,
        description TEXT,
        FOREIGN KEY (tid)
            REFERENCES user(id)
            ON DELETE CASCADE  
    );`;

let db = new sqlite3.Database('./planner.db',sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE, (err)=>{
    if(err){
        console.error(err.stack);
    }
    else{
        console.log('Database Connected');
        db.serialize(function(){
            db.exec('PRAGMA foreign_keys = ON;', (err)=>{
                if(err){
                    console.error('Pragma statement not working');
                }
                else{
                    console.log('Foreign key Enforcement enabled');
                }
            });
            db.run(userTable,(err)=>{
                if(err){
                    console.log('User tables already created or updated')
                    console.log(err);
                }
                else{
                    console.log('User tables created or updated')
                }
            })
            db.run(todoTable,(err)=>{
                if(err){
                    console.log('Todo tables already created or updated')
                    console.log(err);
                }
                else{
                    console.log('Todo tables created or updated')
                }
            })

        })
    }
});

module.exports = db;