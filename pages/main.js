import queryString from 'query-string'
import { useState,useCallback } from 'react'
import FormBox from '../components/formBox';
import useFormBox from '../components/useFormBox';
import Navbar from '../components/navbar';
const Main = props => {
    const [notes,setNote] = useState([])
    const [todo,setTodo] = useState('');
    const {inView,toggle} = useFormBox();
    const username = props.name
    const getRandomColor = () =>{
      return '#'+Math.floor(Math.random()*16777215).toString(16);
    }
    const handleSubmit = useCallback((e) =>{
      e.preventDefault();
      fetch('http://localhost:3000/api/todo/addTodo',{
          method: 'POST',
          body:JSON.stringify({todo:todo}),
          headers:{
              'Content-Type':'application/json'
          }
      })
      .then(r=>r.json())
      .then(data=>{
          if(data.status == 200){
              alert(data.message);
              const values = [...notes];
              values.push({value:todo,color:getRandomColor()})
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

    const getCurrentDate = () =>{
        let currentDate = new Date();
        return currentDate.toDateString();
    }
    const today = getCurrentDate();
    return (
      <div className="App">
      <Navbar name={username}/>
        <div >
          <h1 className="textFont">TODO : {today}</h1>
        </div>
      
        <div>
          <div>
            <button  className="indexButton" onClick={toggle}>+</button>
          </div>
          <FormBox
            inView={inView}
            hide={toggle}
            todo = {todo}
            setTodo = {setTodo}
            handleSubmit = {handleSubmit}
            />
        </div>
        <div className="todo-wrapper">
        {notes.length > 0 ? notes.map((note,idx) => {
          return (
            <div style={{backgroundColor:'#74caff',borderColor:note.color,borderWidth:'15px',borderStyle:'solid',color:'white',width:'200px',height:'50px'}} key={idx}><p className="textFont">{note.value}</p></div>
          )
        }) : null}
        </div>
        </div>
    )
  }

  Main.getInitialProps = ({query}) =>{
    return {
      name:query.name
    }
  }
export default Main;
/*export const getServerSideProps = async ctx =>{
    const data = await fetch('http://localhost:3000/api/users/getUser',{
      method: 'GET',
      headers:{
        'Content-Type': 'application/json'
      }
    }).then(res => res.json());
    return {props: {data}}
  }*/