import Head from 'next/head'
import { useState } from 'react'
import FormBox from '../components/formBox';
import useFormBox from '../components/useFormBox';
import '../css/main.module.css'

export default function Main() {
    const {inView,toggle,todo,setTodo,handleSubmit} = useFormBox();
    const [notes,setNote] = useState([{value: null}])

    const handleChange = () =>{
      const values = [...notes];
      values.push({value:null})
      setNote(values)
    }

    const getCurrentDate = () =>{
        let currentDate = new Date();
        return currentDate.toDateString();
    }
    const today = getCurrentDate();
    return (
      <div className="App">
      <h1>TODO : {today}</h1>
        <div>
            <button onClick={toggle}>Add + Div</button>
            <FormBox
              inView={inView}
              hide={toggle}
              todo = {todo}
              setTodo = {setTodo}
              handleSubmit = {handleSubmit}
              />
        </div>
        {notes.map((note,idx) => {
          return (
            <div key={idx}>Test</div>
          )
        })}
        </div>
    )
  }