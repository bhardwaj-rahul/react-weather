const React = require('react');
const Nav = require('Nav');
var Main = React.createClass({
  render: function () {
    return (
      <div>
        <Nav />
        <h1>This is main component</h1>
        {this.props.children}
      </div>

    );
  }
});

module.exports = Main;
