import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import axios from 'axios';

ReactDOM.render(<App />, document.getElementById('root'));

class Repasocolores extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			colors: [ "#123456", "#123456", "#123456"]
		}
	}

	componentWillMount(){
		axios.get(`http://api.noopschallenge.com/hexbot?count=5`)
	      .then(res => {
	        const data = res.data.colors;
	        this.setState({colors: data});
	      });
	}

	render(){
		return(
			<div id="main">
				<h1>Random Colour refresh</h1>
				<div id="content">
					{this.state.colors.map((color, key)=> <Colores key={key} num={key} color={color.value} />)}
				</div>
			</div>
		);
	}
}

class Colores extends React.Component{
	render(){
		return(
			<div className="tarjetas" style={{background: this.props.color}}>
				<h4>Color {this.props.num+1} en hexadecimal: {this.props.color}</h4>			
			</div>
		);
	}
}

ReactDOM.render(
	<Repasocolores />,
	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
