const React = require('react');
var {Link, IndexLink} = require('react-router');
var Nav = React.createClass({
  render: function() {
    return (
      <div>
        <h2>Nav Component</h2>
        <IndexLink to = "/" activeClassName='active' activeStyle={{fontWeight:'bold',color:'#4CAF50'}}>Get Weather</IndexLink>
        <IndexLink to = "/about" activeClassName='active' activeStyle={{fontWeight:'bold',color:'#4CAF50'}}>About</IndexLink>
        <IndexLink to = "/examples" activeClassName='active' activeStyle={{fontWeight:'bold',color:'#4CAF50'}}>Examples</IndexLink>
      </div>

    );
  }
});

module.exports = Nav;
