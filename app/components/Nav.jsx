const React = require('react');
var {Link, IndexLink} = require('react-router');
var Nav = React.createClass({
  onSearch: function (e) {
    e.preventDefault();
    var navCity = this.refs.navCity.value;
    // alert(navCityRef.value);
    var encodedCity = encodeURIComponent(navCity);
    if (navCity.length > 0) {
      this.refs.navCity.value  = '';
      window.location.hash = '#?city=' + encodedCity;
    }

  },
  render: function() {
    return (
      <div className="top-bar">
        <div className="top-bar-left">
          <ul className="menu">
            <li className="menu-text">React Weather App</li>
            <li><IndexLink to = "/" activeClassName='active' activeStyle={{fontWeight:'bold',color:'#4CAF50'}}>Get Weather</IndexLink></li>
            <li><IndexLink to = "/about" activeClassName='active' activeStyle={{fontWeight:'bold',color:'#4CAF50'}}>About</IndexLink></li>
            <li><IndexLink to = "/examples" activeClassName='active' activeStyle={{fontWeight:'bold',color:'#4CAF50'}}>Examples</IndexLink></li>
          </ul>
        </div>
        <div className="top-bar-right">
          <form onSubmit ={this.onSearch}>
            <ul className="menu">
              <li><input type="search" placeholder="Search Weather" ref='navCity'/></li>
              <li><input type='submit' className="button" value='Get Weather'/></li>
            </ul>
          </form>
        </div>
      </div>

    );
  }
});

module.exports = Nav;

/* <h2>Nav Component</h2>
<IndexLink to = "/" activeClassName='active' activeStyle={{fontWeight:'bold',color:'#4CAF50'}}>Get Weather</IndexLink>
<IndexLink to = "/about" activeClassName='active' activeStyle={{fontWeight:'bold',color:'#4CAF50'}}>About</IndexLink>
<IndexLink to = "/examples" activeClassName='active' activeStyle={{fontWeight:'bold',color:'#4CAF50'}}>Examples</IndexLink> */
