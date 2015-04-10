window.React = require('react')
var ProductData = require('./ProductData')
var CartAPI = require('./utils/CartAPI')
var FluxCartApp = require('./components/FluxCartApp.react')

// load mock product data into localStorage
ProductData.init()

// load mock API call
CartAPI.getProductData()

// render FluxCartApp controller view
React.render(
  <FluxCartApp />, document.getElementById('flux-cart')
)