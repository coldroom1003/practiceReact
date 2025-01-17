import React, { Component } from 'react';
import TodoListTemplete from './components/TodoListTemplete';
import Form from './components/Form';
import TodoItemList from './components/TodoItemList'

class App extends Component {

  id = 3
  
  state = {
    input:'',
    todos: [
      {id:0, text: '리액트 소개', checked: false },
      {id:1, text: '리액트 소개', checked: true },
      {id:2, text: '리액트 소개', checked: false },
    ]
  }

  handleChange = (e) => {
    this.setState({
      unput: e.target.value
    });
  }

  handleCreate = () => {
    const { input,todos } = this.state;
    this.setState({
      input:'',

      todos: todos.concat({
        id: this.id++,
        text: input,
        checked : false
      })
    });
  }

  handleKeyPress = (e) => {

    if(e.key === 'Enter') {
      this.handleCreate();
    }
  }

  render() {
    const {input} = this.state;
    const{
      handleChange,
      handleCreate,
      handleKeyPress
    } = this;
    return (
      <TodoListTemplete form={(
      <Form
          value={input}
          onKeyPress={handleKeyPress}
          onChange={handleChange}
          onCreate={handleCreate}
      />
    )}>
        <TodoItemList todos={todos}/>
      </TodoListTemplete>
    );
  }
}

export default App;
