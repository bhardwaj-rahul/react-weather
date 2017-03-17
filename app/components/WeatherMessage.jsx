const React = require('react');
var WeatherMessage = React.createClass({
  render: function() {

    var {temp,city} = this.props;
    return (
      <div>
        <h3 className='text-center'>It's {temp} in {city} </h3>
      </div>
    );
  }
});

module.exports = WeatherMessage;
