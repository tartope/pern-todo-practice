import React, {Fragment, useState} from 'react';

const EditTodo = ({ todo })=> {

    const [description, setDescription] = useState(todo.description);

    //Edit description function
    const updateDescription = async (e) => {
        e.preventDefault();
        try{
            const body = { description};
            const response = await fetch(`http://localhost:3000/todos/${todo.todo_id}`,{
                method: 'PUT',
                headers: { 'Content-Type': 'application/json'},
                body: JSON.stringify(body)
            });

            window.location = "/";
        }

        catch(err){
            console.error(err.message);
        }
    }

    return(
        <Fragment>
            {/* when you click on a button a modal will target a specific id */}
            <button type="button" class="btn btn-warning" data-toggle="modal" data-target={`#id${todo.todo_id}`}>
            Edit
            </button>

            {/* this is the id the modal will target.  create 'onClick' to set back to original form when outside of modal is clicked. */}
            <div class="modal" id={`id${todo.todo_id}`} onClick={() => setDescription(todo.description)}>
            <div class="modal-dialog">
                <div class="modal-content">

                <div class="modal-header">
                    <h4 class="modal-title">Edit Todo</h4>
                    {/* create 'onClick' to set back to original form when 'x' button is clicked */}
                    <button type="button" class="close" data-dismiss="modal" onClick={() => setDescription(todo.description)}>&times;</button>
                </div>

                {/* set 'value' to 'description' after setting state; create 'onChange' to 'setDescription' */}
                <div class="modal-body">
                    <input 
                        type="text" 
                        className="form-control" 
                        value={description} 
                        onChange={e => setDescription(e.target.value)}/>
                </div>

                {/* create 'onClick' and set to updateDescription function */}
                <div class="modal-footer">
                    <button type="button" class="btn btn-warning" data-dismiss="modal" onClick={e => updateDescription(e)}>Submit</button>
                    {/* create 'onClick' to set back to original form when 'close' button is clicked */}
                    <button type="button" class="btn btn-danger" data-dismiss="modal" onClick={() => setDescription(todo.description)}>Close</button>
                </div>

                </div>
            </div>
            </div>
        </Fragment>
    )
}

export default EditTodo;