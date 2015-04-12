var React = require('react')
var FluxCartActions = require('../actions/FluxCartActions')

// Flux cart view
var FluxCart = React.createClass({
  // hide cart via Actions
  closeCart: function() {
    FluxCartActions.updateCartVisible(false)
  },

  // render cart view
  render: function() {
    return (
      <div className={"flux-cart " + (this.props.visible ? 'active' : '')}>
        <div className="mini-cart">
          <button type="button" className="close-cart" onClick={this.closeCart}>x</button>
        </div>
      </div>
    )
  }
})

module.exports = FluxCart