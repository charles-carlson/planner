import Head from 'next/head'
import { useState, useCallback, useEffect } from 'react'
import Router from "next/router";

export default function Signup(){
    const [username,setUsername] = useState('')
    const [password,setPassword] = useState('')
    const [confirmPw,setConfirm] = useState('')

    const handleSubmit = useCallback((e)=>{
        e.preventDefault();
        if(confirmPw == password){
            fetch('http://localhost:3000/api/users/signup',{
                method:'POST',
                body:JSON.stringify({username:username,
                                    password:password}),
                headers:{
                    'Content-Type':'application/json'
                }
            })
            .then(r=>r.json())
            .then(data=>{
                if(data.status == 200){
                    alert(data.message)
                    Router.push('/login')
                }else{
                    alert('Username already taken')
                    setUsername('')
                    setPassword('')
                }
            }).catch(e=>{
                console.error(e)
            }) 
        }
        else{
            alert('incorrect password or confirmation')
            setUsername('')
            setPassword('')
        }

    },[username,password,confirmPw])

    useEffect(()=>{
        Router.prefetch('/login')
    })
    return(
        <div className="container">
            <Head>
            <title>Signup</title>
            <meta charSet="utf-8"/>
            <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
            </Head>
            <div className="box">
                <h1 className="textFont">Create an Account</h1>
            </div>
            <div>
                <p className="textFont">Enter in a username and password</p>
            </div>
            <div>
                <form onSubmit={handleSubmit}>
                <div className="input-wrapper">
                    <label htmlFor="lusername">username: </label>
                    <input type="text" id="lusername" name="lusername" onChange={(e)=>setUsername(e.target.value)}/>
                </div>
                <div className="input-wrapper">
                    <label htmlFor='lpassword'>password:</label>
                    <input type="password" id="lpassword" name="lpassword" onChange={(e)=>setPassword(e.target.value)}/>
                </div>
                <div className="input-wrapper">
                    <label htmlFor='lconfirmpassword'> confirm password:</label>
                    <input type="password" id="lconfirmpassword" name="lconfirmpassword" onChange={(e)=>setConfirm(e.target.value)}/>
                </div>
                <div className= "box">
                    <input type='submit' value="Confirm"/>
                </div>
                </form>
            </div>

        </div>
    )
}