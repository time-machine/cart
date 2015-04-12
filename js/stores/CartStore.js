var AppDispatcher = require('../dispatcher/AppDispatcher')
var EventEmitter = require('events').EventEmitter
var _ = require('underscore')

// define initial data points
var _cartVisible = false

// extend Cart Store with EventEmitter to add eventing capabilities
var CartStore = _.extend({}, EventEmitter.prototype, {
  // emit change event
  emitChange: function() {
    this.emit('change')
  },

  // return cart visibility state
  getCartVisible: function() {
    return _cartVisible
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