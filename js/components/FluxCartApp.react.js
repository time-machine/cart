var React = require('react')
var CartStore = require('../stores/CartStore')
var ProductStore = require('../stores/ProductStore')
var FluxProduct = require('./FluxProduct.react')
var FluxCart = require('./FluxCart.react')

// method to retrieve state from Stores
function getCartState() {
  return {
    product: ProductStore.getProduct(),
    selectedProduct: ProductStore.getSelected(),
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
    console.log('getInitialState')
    return getCartState()
  },

  // add change listener to stores
  componentDidMount: function() {
    CartStore.addChangeListener(this._onChange)
  },

  // remove change listener from stores
  componentWillUnmount: function() {
    console.log('componentWillUnmount')
  },

  // render our child components, passing state via props
  render: function() {
    return (
      <div className="flux-cart-app">
        <FluxCart products={this.state.cartItems} count={this.state.cartCount} total={this.state.cartTotal} visible={this.state.cartVisible} />
        <FluxProduct products={this.state.product} cartitems={this.state.cartItems} selected={this.state.selectedProduct} />
      </div>
    )
  },

  // method to setState based upon Store changes
  _onChange: function() {
    this.setState(getCartState())
  }
})

module.exports = FluxCartApp
