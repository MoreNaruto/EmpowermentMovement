import React from 'react';
import ReactDOM from 'react-dom';

var EmpowermentApp = React.createClass({
	getInitialState: function () {
		return {
			name: "EmpowermentMovement"
		};
	},
	componentWillMount: function () {
		this.setState({ name: this.state.name });
	},
	render: function () {
		var name = this.state.name;
		return React.createElement(
			'h1',
			null,
			'Title: ',
			name
		);
	}

});

ReactDOM.render(React.createElement(EmpowermentApp, null), document.getElementById('empowerment'));