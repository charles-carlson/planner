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
                    alert('Login failed, wrong username or password');
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
            <div>

                <Head>
                <title>Login</title>
                <meta charSet="utf-8"/>
                <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
                </Head>

                <h1>Login</h1>
                <p>Please enter in your username and password</p>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="lusername">username: </label>
                        <input type="text" id="lusername" name="lusername" onChange={(e)=>setUsername(e.target.value)}/>
                    </div>

                    <div>
                        <label htmlFor="lpassword">password: </label>
                        <input type="text" id="lpassword" name="lpassword" onChange={(e)=>setPassword(e.target.value)}/>
                    </div>
                    <div>
                        <input type='submit' value="Confirm"/>
                    </div>
                </form>


            </div>
        )

}