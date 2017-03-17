const React = require('react');
var About = React.createClass({
  render: function() {
    return (
      <div>
        <h1 className='text-center'>About</h1>
        <p>This is a Weather Application using React and Foundation</p>
        <ul>
          <li>Author: RB</li>
          <li>Github Link</li>
          <li>OpenWeatherMap</li>
        </ul>
      </div>
    );
  }
});

module.exports = About;
