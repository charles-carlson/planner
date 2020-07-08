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
            <form onSubmit={handleSubmit}>
                <label htmlFor="todo">Add a TODO</label>
                <input type="text" id="todo" onChange={(e)=>setTodo(e.target.value)}/>
                <input type="submit" value="Confirm" />
            </form>
        </div>
    </div>
    </React.Fragment>, document.body
) : null;

export default FormBox;