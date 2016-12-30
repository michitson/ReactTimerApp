var React = require('react');
var Clock = React.createClass({

getDefaultProps: function() {
  totalSeconds : 0
},

propTypes: {
  totalSeconds: React.PropTypes.number
},

formatSeconds(totalSeconds){

  var hours = Math.floor(totalSeconds/3600);
  var minutes = (Math.floor(totalSeconds/60) - hours*60);
  var seconds = (totalSeconds - hours*3600 - minutes*60);

  //pad a leading zero if needed
  //could also do it in proto of number
  if (hours <10){hours = '0' + hours};
  if (minutes <10){minutes = '0' + minutes};
  if (seconds <10){seconds = '0' + seconds};

  return hours + ':' + minutes + ':' + seconds;

},

render:function(){

  var {totalSeconds} = this.props;

  return(
    <div className="clock">
      <span className="clock-text">
          {this.formatSeconds(totalSeconds)}
      </span>
    </div>
  );
}

});

module.exports = Clock;
