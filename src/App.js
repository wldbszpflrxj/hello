import { Component } from "react";
import Title from './Title';
import Content from './Content';

export default class App extends Component {
  render(){
    return (
      <div className="todolist_wrap">
        <Title text='Todo List' />
        <Content />
      </div>
    )
  }
};