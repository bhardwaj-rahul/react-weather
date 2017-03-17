const React = require('react');
const ReactDOM = require('react-dom');
const ReactDOMServer = require('react-dom/server');
var ErrorModal = React.createClass({
  getDefaultProps:function () {
    return {
      title:"Error!"
    };
  },
  propTypes: {
    title:React.PropTypes.string,
    message: React.PropTypes.string.isRequired
  },
  componentDidMount: function () {

    var {title, message} = this.props;
    var oModalMarkUp =  (
    <div className="reveal tiny text-center" id="exampleModal1" data-reveal="">
      <h1>{title}</h1>
      <p className="lead">{message}</p>
      <button className='button hollow' data-close="">Okay.</button>
    </div>

    );

    var $modal = $(ReactDOMServer.renderToString(oModalMarkUp));
    $(ReactDOM.findDOMNode(this)).html($modal);
    var oModal = new Foundation.Reveal($('#exampleModal1'));

    oModal.open();

  },
  render: function() {
    return (
      <div />
    )

  }
});
module.exports = ErrorModal;
