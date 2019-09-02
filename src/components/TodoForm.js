import React from "react";

const TodoForm = props => {
    return(
        <form onSubmit={props.handleOnSubmit}>
            <input
                onChange={props.handleChange}
                value={props.value} 
                type="text" 
                name="todo" 
                placeholder="New Todo" />
            <button type="submit"> Add Todo</button>
            <button onClick={props.clearCompleted}>Clear Completed</button>
        </form>
    )

    
}

export default TodoForm;