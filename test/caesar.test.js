// Write your tests here!
const expect = require('chai').expect;
const caesarModule = require("../src/caesar.js")
//const caesar = require("../src/caesar.js")

describe('ceaser() tests written by yours truly', () => {
  describe('Error handling', () => {
    it('should return false if nothing is given', () => {
      let input;
      const shift = 3;
      
      const expected = false
      const actual = caesarModule.caesar(input, shift); //fix
      expect(actual).to.equal(expected)
    })
    it('should return false if 0 is given as shift', () => {
      const input = 'pizza'
      const shift = 0;
      
      const expected = false
      const actual = caesarModule.caesar(input, shift)
      expect(actual).to.equal(expected)
    })
  })
  describe('Encoding a message', () => {
    it('should ignore special characters !@#$%^&*()', () => {
      const input = 'bobs burgers are so f@#%ing good'
      const shift = 12;
      
      const expected = 'nane ngdsqde mdq ea r@#%uzs saap'
      const actual = caesarModule.caesar(input, shift) //fix
      expect(actual).to.equal(expected)
    })
    
    const input = "bobs burgers"
    it('should allow for a shit of 25', () => {
      const shift = 25
      
      const expected = 'anar atqfdqr'
      const actual = caesarModule.caesar(input, shift) //fix
      expect(actual).to.equal(expected)
    })
    it ('should allow for a shift of -25', () => {
      const shift = -25
      
      const expected = 'cpct cvshfst'
      const actual = caesarModule.caesar(input, shift) //fix
      expect(actual).to.equal(expected)
    })
  })
  describe('Decoding a message', () => {
    const encode = false
    it('should ignore special characters', () => {
      const input = 'azcdee0qs!'
      const shift = 1
      
      const expected = 'badeff0rt!'
      const actual = caesarModule.caesar(input, shift) //fix
      expect(actual).to.equal(expected)
    })
    it('should allow for a shift of 25', () => {
      const input = 'anar atqfdqr'
      const shift = 25
      
      const expected = 'bobs burgers'
      const actual = caesarModule.caesar(input, shift, encode) //fix
      expect(actual).to.equal(expected)
    })
    it('should allow for a shift of -25', () => {
      const input = 'cpct cvshfst'
      const shift = -25
      
      const expected = 'bobs burgers'
      const actual = caesarModule.caesar(input, shift, encode) //fix
      expect(actual).to.equal(expected)
    })
  })
}) 