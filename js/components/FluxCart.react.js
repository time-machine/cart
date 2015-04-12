var React = require('react')

// Flux cart view
var FluxCart = React.createClass({
  // render cart view
  render: function() {
    return (
      <div className={"flux-cart " + (this.props.visible ? 'active' : '')}>

      </div>
    )
  }
})

module.exports = FluxCart