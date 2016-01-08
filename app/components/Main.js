var React=require('react');
var ReactDOM=require('react-dom');

var Main=React.createClass({
render() {
	return (
		<div>
		Hello World!
		</div>
	)
}
});

ReactDOM.render(<Main />,document.getElementById('app'));


