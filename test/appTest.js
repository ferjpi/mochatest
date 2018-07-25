const assert = require('chai').assert
const sayHello = require('../app').sayHello
const addNumber = require('../app').addNumbers
// const app = require('../app')

describe('App', function() {
  it('sayHello should return hello', function() {
    let result = sayHello()
    assert.equal(result, 'hello')
  })

  it('sayHello should return type string', function() {
    let result = sayHello()
    assert.typeOf(result, 'string')
  })
})
