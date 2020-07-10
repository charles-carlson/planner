import Head from 'next/head';
import React, {useState,useCallback,useEffect} from 'react';
import Router from "next/router";
export default function Login(){
        const [username,setUsername] = useState("");
        const [password,setPassword] = useState("");

        const handleSubmit = useCallback((e) =>{
            e.preventDefault();
            fetch('http://localhost:3000/api/users/login',{
                method:'POST',
                body:JSON.stringify({username,password}),
                headers:{
                    'Content-Type':'application/json'
                }
            })
            .then(r=>r.json())
            .then(data=>{
                if(data.status == 200){
                    alert(data.message);
                    Router.push('/main');
                }else{
                    alert(data.message);
                    setUsername('');
                    setPassword('');
                }
            }).catch(e=>{
                console.error(e);

            })
        },[username,password])

        useEffect(()=>{
            Router.prefetch('/main');
        })
        return(
            <div className="container">

                <Head>
                <title>Login</title>
                <meta charSet="utf-8"/>
                <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
                </Head>
                <div className="box">
                    <h1 className="textFont">Login</h1>
                </div>
                <div className="box">
                    <p className="textFont">Please enter in your username and password</p>
                </div>  
                <form onSubmit={handleSubmit}>
                    <div className="input-wrapper">
                        <label htmlFor="lusername">username: </label>
                        <input type="text" id="lusername" name="lusername" onChange={(e)=>setUsername(e.target.value)}/>
                    </div>

                    <div className="input-wrapper">
                        <label htmlFor="lpassword">password: </label>
                        <input type="password" id="lpassword" name="lpassword" onChange={(e)=>setPassword(e.target.value)}/>
                    </div>
                    <div className="box">
                        <input type='submit' value="Confirm"/>
                    </div>
                </form>


            </div>
        )

}