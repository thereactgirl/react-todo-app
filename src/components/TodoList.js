import React from "react";
import Todo from './Todo';

class TodoList extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            search: '',
        }
    }

    updateSearch = (e) => {
        this.setState({ [e.target.name]: e.target.value.substr(0, 10) }) // limits the input to 10 chars
    }

       

    
    
 
      
    render(){
        let filteredTodos = this.props.todos.filter(
            (todo) => {
                return todo.task.toLowerCase().indexOf(this.state.search) !== -1;
            }
        );

        return(
            <div> 
                <input 
                    type="text"
                    name="search"
                    placeholder="search"
                    value={this.state.search}
                    onChange={this.updateSearch}
                />
            
            {filteredTodos.map(todo =><Todo 
                key={todo.id} 
                todo={todo} 
                toggleCompleted={this.props.toggleCompleted} 
                />)} 
                
            </div>
        )
    }
}

export default TodoList;