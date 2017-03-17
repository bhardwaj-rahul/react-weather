const React = require('react');
const WeatherMessage = require('WeatherMessage');
const WeatherForm = require('WeatherForm');
const openWeatherMap = require('openWeatherMap');
var Weather = React.createClass({
  getInitialState:function () {
    return {
      isLoading: false
    }
  },
  handleSearch: function (city) {
    var that = this;

    this.setState({isLoading: true});
    openWeatherMap.getTemp(city).then(function (temp) {
      that.setState({
        city: city,
        temp:temp,
        isLoading: false
      });
    }, function (errorMsg) {
      alert(errorMsg);
      that.setState({
        isLoading:false
      });
    });
  },
  render: function() {
    var {isLoading, temp,city} = this.state;

    function renderMessage () {
      if (isLoading) {
        return <h3 className='text-center'>Loading...</h3>;
      } else if (temp && city) {
          return <WeatherMessage temp={temp} city={city}/>;
      }
    }
    return (
      <div>
        <h1 className='text-center'>Get Weather</h1>
        <WeatherForm onSearch ={this.handleSearch} />
        {renderMessage()}
      </div>
    );
  }
});

module.exports = Weather;
