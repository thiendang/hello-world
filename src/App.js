import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';

export class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

var todolist;

export class InputDiv extends Component {
  constructor(props){
    super(props);
  }
  send = () => {
    todolist.setState({mang: todolist.state.mang.concat(this.refs.txt.value)});
    ReactDOM.unmountComponentAtNode(document.getElementById('add'));
  }
  render(){
    return(
      <div>
        <input type="text" ref="txt" placeholder="Enter your note"/>
        <button onClick={this.send}>Gui</button>
      </div>
    );
  }
}

function addDiv() {
  ReactDOM.render(
  <InputDiv />
  , document.getElementById('add'));
}

var newMang = [];

class Note extends Component {
  constructor(props) {
    super(props);
    this.state = {
      onEdit: false
    }
  }
  delete = () => {
    newMang = todolist.state.mang.splice(this.props.id, 1);
    todolist.setState({mang: todolist.state.mang});
  }
  edit = () => {
    this.setState({onEdit: true});
  }
  save = () => {
    todolist.state.mang[this.props.id] = this.refs.txt.value;
    todolist.setState({mang: todolist.state.mang});
    this.setState({onEdit: false});
  }
  cancel = () => {
    this.setState({onEdit: false});
  }
  render(){
    if (this.state.onEdit) {
      return (
        <div className="div-note">
          <input defaultValue={this.props.children} ref='txt'/>
          <button onClick={this.save}>Luu</button>
          <button onClick={this.cancel}>Huy</button>
        </div>
      );
    } else {
      return (
        <div className="div-note">
          <p>{this.props.children}</p>
          <button onClick={this.delete}>Xoa</button>
          <button onClick={this.edit}>Sua</button>
        </div>
      );
    }
  }
} 

export default class TodoList extends Component {
  constructor(props) {
    super(props);
    todolist = this;
    this.state = {
      mang: ['NODEJS', 'PHP', 'iOS']
    }
  }
  render(){
    return(
      <div>
        <div id="add"></div>
        <button onClick={addDiv}>Them</button>
        {
          this.state.mang.map(function (note, index) {
            return <Note key={index} id={index}>{note}</Note>
          })
        }
      </div>
    );
  }
}
