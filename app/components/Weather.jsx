const React = require('react');
const WeatherMessage = require('WeatherMessage');
const WeatherForm = require('WeatherForm');
const openWeatherMap = require('openWeatherMap');
const ErrorModal = require('ErrorModal');
var Weather = React.createClass({
  getInitialState:function () {
    return {
      isLoading: false
    }
  },
  handleSearch: function (city) {
    var that = this;

    this.setState({
      isLoading: true,
      errorMsg : undefined,
      city:undefined,
      temp: undefined
    });
    openWeatherMap.getTemp(city).then(function (temp) {
      that.setState({
        city: city,
        temp:temp,
        isLoading: false
      });
    }, function (errorMsg) {

      that.setState({
        isLoading:false,
        errorMsg : errorMsg.message
      });
    });
  },

  componentDidMount: function () {
    var location= this.props.location.query.city;
// debugger;
    if (location) {
      this.handleSearch(location);
      window.location.hash="#/";
    }
  },

  componentWillReceiveProps:function (newProps) {
    var location= newProps.location.query.city;
// debugger;
    if (location) {
      this.handleSearch(location);
      window.location.hash="#/";
    }
  },
  render: function() {
    var {isLoading, temp,city, errorMsg} = this.state;


    function renderErrorModal () {
      if (typeof errorMsg == "string") {
        return <ErrorModal message={errorMsg}/>
      }
    }
    function renderMessage () {
      if (isLoading) {
        return <h3 className='text-center'>Loading...</h3>;
      } else if (temp && city) {
          return <WeatherMessage temp={temp} city={city}/>;
      }
    }
    return (
      <div>
        <h1 className='text-center page-title'>Get Weather</h1>
        <WeatherForm onSearch ={this.handleSearch} />
        {renderMessage()}
        {renderErrorModal()}
      </div>
    );
  }
});

module.exports = Weather;
