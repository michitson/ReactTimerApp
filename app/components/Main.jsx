var React = require('react');
var Navigation = require('Navigation');

var Main = (props) => {
    return(
      <div>
        <Navigation></Navigation>
        <div className="row">
          <div className="column medium-6 large-4 small-centered">
            <p>Main jsx</p>
            {props.children}

          </div>
        </div>
      </div>
    );
  };

module.exports = Main;
