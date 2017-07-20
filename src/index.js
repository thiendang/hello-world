import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import TodoList, {App} from './App.js';
// const user = {
// 	name: "Thien",
// 	email: "thien@gmail.com"
// };

// const element = <h1>Hello world, My name is: {user.name}, email: {user.email}</h1>

// const element = (
// 	<div className="hello">
// 		<h1>Hello world</h1>
// 		<h2>My name is: {user.name}, email: {user.email}</h2>
// 	</div>
// );
// var numbers = [1, 2, 3, 4];
// var doubleNumbers = numbers.map((eachNumber) => eachNumber * 2 + "; ");

// function UserInfo(props) {
// 	return (
// 		<div>
// 			<p>Name: {props.name}</p>
// 			<p>Email: {props.email}</p>
// 		</div>
// 	);
// }

// class UserInfo extends React.Component {
// 	render () {
// 		return (
// 			<div>
// 				<div className="UserDetail">
// 					<p>Name: {this.props.name}</p>
// 					<p>Email: {this.props.email}</p>
// 				</div>
// 				<div className="OtherInfo">
// 					<p>Other infomation: {this.props.otherInfomation}</p>
// 				</div>
// 			</div>
// 		);
// 	};
// }

// class UserDetail extends React.Component {
// 	render (){
// 		return(
// 			<div className="UserDetail">
// 				<p>Name: {this.props.name}</p>
// 				<p>Email: {this.props.email}</p>
// 			</div>
// 		);
// 	}
// }
// class UserInfo extends React.Component {
// 	render () {
// 		return (
// 			<div>
// 				<UserDetail name={this.props.name} email={this.props.email} />
// 				<div className="OtherInfo">
// 					<p>Other infomation: {this.props.otherInfomation}</p>
// 				</div>
// 			</div>
// 		);
// 	};
// }

// const element = <UserInfo name="Thien" email="thien@gmail.com" otherInfomation="He is 22 years old"/>

// class Note extends React.Component{
// 	constructor(props) {
// 		super(props);
// 		this.state = {
// 			hocVien: 10
// 		}
// 		this.themHocVien = this.themHocVien.bind(this);
// 	}
// 	themHocVien(){
// 		this.setState({hocVien: this.state.hocVien + 1})
// 	}
// 	render (){
// 		return (
// 			<div>
// 				<p>Hello world</p>
// 				<p>{this.props.txt}</p>
// 				<p>{this.state.hocVien}</p>
// 				<button onClick = {this.themHocVien}>Them</button>
// 			</div>
// 		);
// 	}
// }
// Note.defaultProps = {
// 	txt: 'NodeJS'
// }

// State
// class Counter extends React.Component {
// 	constructor(props) {
// 		super(props);
// 		this.state = {
// 			seconds: 0
// 		};
// 	}
// 	incrementCounter(){
// 		this.setState(
// 			(prevState, props) => ({
// 				seconds: prevState.seconds + 1
// 			})
// 		);
// 	}
// 	// Khi giao dien vua duoc tao ra
// 	componentDidMount(){
// 		this.timerID = setInterval(
// 			() => this.incrementCounter(), 1000
// 		);
// 	}
// 	componentWillUnmount(){
// 		clearInterval(this.timerID);
// 	}
// 	render(){
// 		return (
// 			<div>
// 				<h1>This is a counting machine!</h1>
// 				<h2>Seconds: {this.state.seconds} s </h2>
// 			</div>
// 		);
// 	}
// }

class ToggleButton extends React.Component {
	constructor(props){
		super(props);
		this.state = {isOn: true};
		this.buttonClick = this.buttonClick.bind(this);
	}

	buttonClick(){
		this.setState(prevState => (
			{
				isOn: !prevState.isOn
			}
		));
	}

	// buttonClick = () => {
	// 	this.setState(prevState => (
	// 		{
	// 			isOn: !prevState.isOn
	// 		}
	// 	));
	// }
	render(){
		return (
			<div>
				<button className="ToggleButton" onClick={this.buttonClick}>
					This is a toggle button
					{this.state.isOn ? ": ON" : ": OFF"}
				</button>
			</div>
		);
	}
}

class LoginComponent extends React.Component {
	constructor(props){
		super(props);
		this.state = {isLoggedIn: false};
	}
	handleLogOut = () => {
		this.setState({isLoggedIn : false});
	}

	handleLogIn = () => {
		this.setState({isLoggedIn : true});
	}
	render(){
		let myButton = null;
		let title = null;
		if (this.state.isLoggedIn) {
			myButton = <button onClick={this.handleLogOut}>LogOut</button>
		} else {
			myButton = <button onClick={this.handleLogIn}>LogIn</button>
		}
		title = this.state.isLoggedIn ? <h1> Logged In</h1> : <h1>Logged Out</h1>
		return(
			<div>
				{title}
				{myButton}
			</div>
		);
	}
}

class MailComponent extends React.Component {
	constructor(props) {
		super(props);
	}
	render(){
		return (
			<div>
				<h1>Mail statistics</h1>
				{this.props.newMess.length >= 0 &&
					<h2>
						You have {this.props.newMess.length} new Messages.
					</h2>
				}
			</div>
		);
	}
}

function ListItem(props) {
	return <li>{props.value}</li>
}

class Animals extends React.Component {
	constructor(props) {
		super(props);
		this.ListItem = props.animals.map (
			(animal, index) => <ListItem key={animal.id} value={index.toString() + " - " + animal.title}/>
		);
	}
	render(){
		return(
			<ul>{this.ListItem}</ul>
		);
	}
}

const animals = [
		{
			id: 'a1',
			name: 'lion',
			title: 'this is a lion'
		},
		{
			id: 'a2',
			name: 'tiger',
			title: 'this is a tiger'
		},
		{
			id: 'a3',
			name: 'dog',
			title: 'this is a dog'
		}
	];

class Form extends React.Component {
	constructor(props) {
		super(props);
		// this.state = {
		// 	textData: ""
		// };
		this.state = {
			YourName: '',
			numberOfFriends: 0
		};
	}
	handleChange = (e) => {
		// .target.value la tro chinh den noi ma goi no, o day la the input
		// this.setState({textData: e.target.value});
		this.setState({
			[e.target.name]: e.target.value
		});
	}
	handleSubmit = (e) => {
		// alert("You submmit text data: " + this.state.textData);
		alert("You submmit text data: " + this.state.YourName + ', ' + this.state.numberOfFriends);
		e.preventDefault();
	}
	render(){
		return (
			<form onSubmit={this.handleSubmit}>
				<label>
					Your Name: 
					<input type="text" name="YourName" value={this.state.textData} onChange={this.handleChange} />
				</label>
				<br/><br/>
				<label>
					Number of friends: 
					<input type="number" name="numberOfFriends" value={this.state.numberOfFriends} onChange={this.handleChange}/>
				</label>
				<input type="submit" value="Submit your name"></input>
			</form>
		);
	}
}

class Pane extends React.Component{
	constructor(props){
		super(props);
	}
	render(){
		return(
			<div>
				{this.props.up}
				{this.props.down}
			</div>
		);
	}
}

function UpComponent(props) {
	return(
		<div className="red">
			This is Red
		</div>
	);
}

function DownComponent(props) {
	return(
		<div className="blue">
			This is Blue
		</div>
	);
}

class Com extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			num: 0
		}
	}
	add = () => {
		this.setState({num: this.state.num + 1})
	}
	render(){
		return (
			<button onClick={this.add}>Hello {this.state.num}</button>
		);
	}
}

class Album extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			img: 1
		}
	}
	next = () => {
		this.setState({img: this.state.img === 4 ? 4 : this.state.img + 1});
		console.log(this.state.img);
	}
	back = () => {
		this.setState({img: this.state.img === 1 ? 1: this.state.img - 1});
		console.log(this.state.img);
	}
	render(){
		return(
			<div>
				<h1>Album</h1>
				<img src={require('./img/' + this.state.img + '.png')} />
				<hr/>
				<button onClick={this.back}>Back</button>
				<button onClick={this.next}>Next</button>
			</div>
		);
	}
}

class Album1 extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			img: 1
		}
	}
	change = () => {
		this.setState({img: (this.state.img % 4) + 1});
		console.log(this.state.img);
	}
	componentDidMount(){
		setInterval(this.change, 1000);
	}
	render(){
		return(
			<div>
				<h1>Album</h1>
				<img src={require('./img/' + this.state.img + '.png')} />
				<hr/>
			</div>
		);
	}
}

ReactDOM.render(
	<TodoList />
	, document.getElementById('root'));
// registerServiceWorker();
