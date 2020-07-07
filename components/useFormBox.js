import {useState,useCallback} from 'react'
import { stringify } from 'querystring';

const useFormBox = () =>{
    const [inView,setInView] = useState(false);


    function toggle(){
        setInView(!inView);
    }
    

    return {
        inView,
        toggle,
    }
}

export default useFormBox;