var React = require('react')
var CartStore = require('../stores/CartStore')
var FluxCart = require('./FluxCart.react')

// method to retrieve state from Stores
function getCartState() {
  return {
    cartItems: CartStore.getCartItems(),
    cartCount: CartStore.getCartCount(),
    cartTotal: CartStore.getCartTotal(),
    cartVisible: CartStore.getCartVisible()
  }
}

// define main controller view
var FluxCartApp = React.createClass({
  // get initial state from stores
  getInitialState: function() {
    console.log("getInitialState")
    return getCartState()
  },

  // add change listener to stores
  componentDidMount: function() {
    console.log("componentDidMount")
  },

  // remove change listener from stores
  componentWillUnmount: function() {
    console.log("componentWillUnmount")
  },

  // render our child components, passing state via props
  render: function() {
    return (
      <div className="flux-cart-app">
        <FluxCart products={this.state.cartItems} count={this.state.cartCount} total={this.state.cartTotal} visible={this.state.cartVisible} />
      </div>
    )
  }
})

module.exports = FluxCartApp