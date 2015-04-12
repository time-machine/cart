var AppDispatcher = require('../dispatcher/AppDispatcher')
var EventEmitter = require('events').EventEmitter
var _ = require('underscore')

// define initial data points
var _products = {}, _cartVisible = false

// extend Cart Store with EventEmitter to add eventing capabilities
var CartStore = _.extend({}, EventEmitter.prototype, {
  // return cart items
  getCartItems: function() {
    return _products
  },

  // return # of items in cart
  getCartCount: function() {
    return Object.keys(_products).length
  },

  // return cart cost total
  getCartTotal: function() {
    var total = 0
    for (product in _products) {
      console.log('getCartTotal has _products')
      // if (_products.hasOwnProperty(product)) {
      //   total += _products[product].price * _products[product].quantity
      // }
    }
    return total.toFixed(2)
  },

  // return cart visibility state
  getCartVisible: function() {
    return _cartVisible
  },

  // emit change event
  emitChange: function() {
    this.emit('change')
  }
})

// register callback with AppDispatcher
AppDispatcher.register(function(payload) {
  var action = payload.action

  switch(action.actionType) {
    default:
      return true
  }

  // if action was responded to, emit change event
  CartStore.emitChange()

  return true
})

module.exports = CartStore