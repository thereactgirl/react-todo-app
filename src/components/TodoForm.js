import React from "react";

const TodoForm = props => {
    return(
        <form>
            <input
                onChange={props.handleChange}
                value={props.value} 
                type="text" 
                name="todo" 
                placeholder="New Todo" />
            <button type="submit" onClick={props.handleOnSubmit}> Add Todo</button>
            <button onClick={props.clearCompleted}>Clear Completed</button>
        </form>
    )

    
}

export default TodoForm;