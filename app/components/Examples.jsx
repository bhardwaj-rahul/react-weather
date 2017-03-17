const React = require('react');
var {Link} = require('react-router');
var Examples = React.createClass({
  render: function() {
    return (
      <div>
        <h1 className='text-center'>Examples</h1>
        <p>Here are the few examples you can try out: </p>
        <ol>
          <li>
            <Link to='/?city=Gurgaon'>Gurgaon</Link>
          </li>
          <li>
            <Link to='/?city=Bangalore'>Bangalore</Link>
          </li>
        </ol>
      </div>
    );
  }
});

module.exports = Examples;
