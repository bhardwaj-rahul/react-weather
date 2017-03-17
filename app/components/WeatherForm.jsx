const React = require('react');
var WeatherForm = React.createClass({
  render: function() {

    return (
      <form onSubmit = {this.onSubmit}>
        <div>
          <input type='text' ref='city' placeholder='Enter City'/>
        </div>
        <div>
          <button className='button hollow expanded'>Search</button>
        </div>
      </form>
    );
  },
  onSubmit:function (e) {
    e.preventDefault();
    // var object = {};
    var city = this.refs.city.value;
    this.props.onSearch(city);
    // if (city.length > 0) {
    //   this.refs.city.value ='';
    //   // object.city = city;
    //   // object.temp = 45;
    //   this.props.onSearch(city);
    // }
  },
});

module.exports = WeatherForm;
