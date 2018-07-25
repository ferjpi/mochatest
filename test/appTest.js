const assert = require('chai').assert
// const sayHello = require('../app').sayHello
// const addNumber = require('../app').addNumbers
const app = require('../app')

// Results
const sayHelloResult = app.sayHello()
const addNumbersResult = app.addNumbers(5,5)

describe('App', function() {
  describe('sayHello()', function() {
    it('sayHello should return hello', function() {
      // let result = app.sayHello()
      assert.equal(sayHelloResult, 'hello')
    })

    it('sayHello should return type string', function() {
      // let result = app.sayHello()
      assert.typeOf(sayHelloResult, 'string')
    })
  })

  describe('addNumbers()', function() {
    it('addNumber should be above 5', function() {
      // let result = app.addNumber(5,5)
      assert.isAbove(addNumbersResult, 5)
    })

    it('addNumber should return type number', function() {
      // let result = app.addNumber()
      assert.typeOf(addNumbersResult, 'number')
    })
  })
})
