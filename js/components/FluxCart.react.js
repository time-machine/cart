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

  // remove item from cart via Actions
  removeFromCart: function(sku) {
    FluxCartActions.removeFromCart(sku)
    FluxCartActions.updateCartVisible(false)
  },

  // render cart view
  render: function() {
    var _this = this
    var products = this.props.products
    return (
      <div className={'flux-cart ' + (this.props.visible ? 'active' : '')}>
        <div className="mini-cart">
          <button type="button" className="close-cart" onClick={this.closeCart}>x</button>
          <ul>
            {Object.keys(products).map(function(product) {
              return (
                <li key={product}>
                  <h1 className="name">{products[product].name}</h1>
                  <p className="type">{products[product].type} x {products[product].quantity}</p>
                  <p className="price">${(products[product].price * products[product].quantity).toFixed(2)}</p>
                  <button type="button" className="remove-item" onClick={_this.removeFromCart.bind(_this, product)}>Remove</button>
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
