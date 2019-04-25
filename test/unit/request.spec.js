const chai = require('chai');
const server = require('../../src/middleware/request')
const { request, getData } = require('../../src/middleware/request')
const mockData = require('../mockData')

chai.should();

describe('request', () => {
  it('Should return our data', () => {
    console.log(mockData)
  })
})
