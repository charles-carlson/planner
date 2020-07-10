import React from 'react'
import ReactDOM from 'react-dom';
const FormBox = ({inView,hide,setTodo,handleSubmit}) => inView ? ReactDOM.createPortal(
    <React.Fragment>
    <div className="form-overlay"/>
    <div className="form-wrapper" aria-modal aria-hidden tabIndex={-1} role="dialog">
        <div className="form">
            <div className="form-header">
                <button type="button" className="form-exit" data-dismiss="modal" aria-label="Close" onClick={hide}>
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <form className="form-box-center" onSubmit={handleSubmit}>
                <div className="input-wrapper">
                    <label htmlFor="todo">Add a TODO</label>
                </div>
                <div className="input-wrapper">
                    <input type="text" id="todo" onChange={(e)=>setTodo(e.target.value)}/>
                </div>
                <div className="box">
                    <input type="submit" value="Confirm" />
                </div>    
            </form>
        </div>
    </div>
    </React.Fragment>, document.body
) : null;

export default FormBox;