const express = require('express');
const next = require('next');
const bodyParser = require('body-parser');
const session = require('express-session');
const SQLiteStore = require('connect-sqlite3')(session);
const cookieParser = require('cookie-parser');
const port = 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({dev});
const handle = app.getRequestHandler();
var usersRouter = require('./routes/users')
var todoRouter = require('./routes/todo');
app.prepare()
    .then(()=>{
        const server = express();

        server.use(bodyParser.urlencoded({extended: true}));
        server.use(bodyParser.json());
        server.use(cookieParser())

        server.use(session({
            store: new SQLiteStore,
            secret: 'supersecret',
            resave: true,
            saveUninitialized: true,
            cookie:{ maxAge: 7*24*60*60*1000}
        }));

        server.get('*', (req,res)=>{
            return handle(req,res)
        });

        server.use('/api/users',usersRouter);
        server.use('/api/todo',todoRouter);

        server.listen(port, (err) =>{
            if(err) throw err;
            console.log(`Server running at http://localhost:${port}`);
        });
    });