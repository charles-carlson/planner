import Head from 'next/head'
import { useState,useCallback } from 'react'
import FormBox from '../components/formBox';
import useFormBox from '../components/useFormBox';


export default function Main() {
    const [notes,setNote] = useState([{value: null}])
    const [todo,setTodo] = useState('');
    const {inView,toggle} = useFormBox();

    const handleSubmit = useCallback((e) =>{
      e.preventDefault();
      fetch('http://localhost:3000/api/todo/addTodo',{
          method: 'POST',
          body:JSON.stringify({todo}),
          headers:{
              'Content-Type':'application/json'
          }
      })
      .then(r=>r.json())
      .then(data=>{
          if(data.status == 200){
              alert(data.message);
              const values = [...notes];
              values.push({value:todo})
              console.log(todo)
              setNote(values)
          }
          else{
              console.log(data.message);
          }
      }).catch(err=>{
          console.error(err);
          throw err;
      })
  },[todo])
    const getRandomColor = () =>{
      return Math.floor(Math.random()*16777215).toString(16);
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
            <div key={idx}>{note.value}</div>
          )
        })}
        </div>
    )
  }