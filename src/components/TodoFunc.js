//for setting what user inputs in the TodoForm to state 
export const handleChange=(e)=>{
    this.setState({ [e.target.name]: e.target.value })
  }

 export const addTodo=(e) => {
   e.preventDefault();
   const newTodo = { task: this.state.todo, completed: false, id: Date.now() };
   this.updateLocalStorage();
   
    this.setState({ 
      todos: [...this.state.todos, newTodo], 
      todo: '' 
    });
    
 }


 export const clearCompleted = e => {
    e.preventDefault();
    let todos = this.state.todos.filter(todo => !todo.completed);
    this.setState({todos});
    
  }

 export const toggleCompleted = (id) => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (id === todo.id){
          return {...todo, completed: !todo.completed};
        } else {
          return todo;
        }
      })
    });
    
  }

  export const updateLocalStorage = () => {
    console.log("update", this.state.todos);
    localStorage.setItem("todos", JSON.stringify(this.state.todos))
  };
