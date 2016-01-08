var React=require('react');
var ReactDOM=require('react-dom');
var ReactRouter=require('react-router');
var Router=ReactRouter.Router;
var Route=ReactRouter.Route;

var routes=require('../config/Routes');

ReactDOM.render(
	<Router>{routes}</Router>,
	document.getElementById('app')
	);
