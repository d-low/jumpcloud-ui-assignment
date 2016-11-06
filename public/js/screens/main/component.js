var React = require('react');
var ReactBackbone = require('react.backbone');

var MainComponent = React.createFactory(
  React.createBackboneClass({
    render: function() {
      /* beautify ignore:start */
      return (
        <div id="main-container" className="main-container">
        </div>
      );
      /* beautify ignore:end */
    }
  })
);

module.exports = MainComponent;