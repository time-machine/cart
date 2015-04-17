var keyMirror = require('react/lib/keyMirror')

// define action constants
module.exports = keyMirror({
  // adds item to cart
  CART_ADD: null,

  // remove item from cart
  CART_REMOVE: null,

  // shows or hides the cart
  CART_VISIBLE: null,

  // select a product option
  SELECT_PRODUCT: null,

  // loads our mock data
  RECEIVE_DATA: null
})
