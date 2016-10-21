import React from 'react';
import ReactDOM from 'react-dom';

var EmpowermentApp = React.createClass({
	getInitialState: function(){
		return {
			name: "EmpowermentMovement"
		}
	},
	componentWillMount: function(){
		this.setState({name: this.state.name})
	},
	render: function() {
		var name = this.state.name;
		return (
			<h1>Title: {name}</h1>
		);
	}

});

ReactDOM.render(<EmpowermentApp/>, document.getElementById('empowerment'));