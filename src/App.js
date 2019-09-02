import React from 'react';
import TodoList from "./components/TodoList";
import TodoForm from './components/TodoForm';

const todoData = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
];

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      todos: [],
      todo: ''
    };
  }
//for setting what user inputs in the TodoForm to state 
  handleChange=(e)=>{
    this.setState({ [e.target.name]: e.target.value })
  }

 addTodo=(e) => {
   e.preventDefault();
   const newTodo = { task: this.state.todo, completed: false, id: Date.now() };
   this.updateLocalStorage();
   this.setState({ 
     todos: [...this.state.todos, newTodo], 
     todo: '' 
    });
    
    console.log(localStorage.getItem("todos"));
 }


  clearCompleted = e => {
    e.preventDefault();
    let todos = this.state.todos.filter(todo => !todo.completed);
    this.updateLocalStorage();
    this.setState({todos});
    console.log(localStorage.getItem("todos"));
  }

  toggleCompleted = (id) => {
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
  componentDidMount (){
    // console.log("update 2", this.state.todos);
    let theData = localStorage.getItem('todos') ? JSON.parse(localStorage.getItem("todos")) : todoData;
    // console.log("conole", theData);
    this.setState({
          todos:theData
        })
  }


  updateLocalStorage = () => {
    // console.log("update", this.state.todos);
    localStorage.setItem("todos", JSON.stringify(this.state.todos))
  };

  render() {
    // console.log(this.state);
    // console.log(localStorage);
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList todos={this.state.todos} toggleCompleted={this.toggleCompleted} />
        <TodoForm 
          value={this.state.todo}
          handleChange={this.handleChange}
          handleOnSubmit={this.addTodo}
          clearCompleted={this.clearCompleted}
        />
      </div>
    );
  }
}

export default App;
