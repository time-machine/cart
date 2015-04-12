var AppDispatcher = require('../dispatcher/AppDispatcher')
var FluxCartConstants = require('../constants/FluxCartConstants')

// define actions object
var FluxCartActions = {
  // receive initial product data
  receiveProduct: function(data) {
    AppDispatcher.handleAction({
      actionType: FluxCartConstants.RECEIVE_DATA,
      data: data
    })
  },

  // update cart visibility status
  updateCartVisible: function(cartVisible) {
    AppDispatcher.handleAction({
      actionType: FluxCartConstants.CART_VISIBLE,
      cartVisible: cartVisible
    })
  }
}

module.exports = FluxCartActions