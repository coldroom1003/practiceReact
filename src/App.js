import React, { Component } from 'react';
import TodoListTemplete from './components/TodoListTemplete';
import Form from './components/Form';
import TodoItemList from './components/TodoItemList'

class App extends Component {
  render() {
    return (
      <TodoListTemplete form={<Form/>}>
        <TodoItemList/>
      </TodoListTemplete>
    );
  }
}

export default App;
