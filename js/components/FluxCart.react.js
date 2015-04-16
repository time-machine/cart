var React = require('react')
var FluxCartActions = require('../actions/FluxCartActions')

// Flux cart view
var FluxCart = React.createClass({
  // hide cart via Actions
  closeCart: function() {
    FluxCartActions.updateCartVisible(false)
  },

  // show cart via Actions
  openCart: function() {
    FluxCartActions.updateCartVisible(true)
  },

  // render cart view
  render: function() {
    var products = this.props.products
    products = {aa: 'apple', bb: 'boy'}
    return (
      <div className={'flux-cart ' + (this.props.visible ? 'active' : '')}>
        <div className="mini-cart">
          <button type="button" className="close-cart" onClick={this.closeCart}>x</button>
          <ul>
            {Object.keys(products).map(function(product) {
              return (
                <li key={product}>
                </li>
              )
            })}

          </ul>
          <span className="total">Total: ${this.props.total}</span>
          <button type="button" className="view-cart" onClick={this.openCart} disabled={Object.keys(products).length > 0 ? '' : 'disabled'}>View Cart ({this.props.count})</button>
        </div>
      </div>
    )
  }
})

module.exports = FluxCart
