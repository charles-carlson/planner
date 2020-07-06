import {useState} from 'react'
import { stringify } from 'querystring';

const useFormBox = () =>{
    const [inView,setInView] = useState(false);
    const [todo,setTodo] = useState('');

    function toggle(){
        setInView(!inView);
    }
    const handleSubmit = useCallback((e) =>{
        e.preventDefault;
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
                console.log(data.message);
            }
            else{
                console.log(data.message);
            }
        }).catch(err=>{
            console.error(err);
            throw err;
        })
    },[todo])

    return {
        inView,
        toggle,
        todo,
        setTodo,
        handleSubmit,
    }
}

export default useFormBox;