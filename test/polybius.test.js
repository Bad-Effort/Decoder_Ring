// Write your tests here!
const expect = require('chai').expect;
const polybiusModule = require("../src/polybius.js")


describe('polybius tests written by yours truly', () => {
  describe('Error handling', () => {
    it('should return false if the length of all numbers is odd, when decoding', () => {
      const input = '1112 234';
      const encode = false;
      
      const expected = false;
      const actual = polybiusModule.polybius(input, encode)
      expect(actual).to.equal(expected)
      
    })
  })
  describe('Encoding a message', () => {
    const encode = true;
    it('should encode a message', () => {
      const input = 'a'
      
      const expected = '11'
      const actual = polybiusModule.polybius(input, encode)
      expect(actual).to.equal(expected)
    })
    it('should translate both "i" & "j"', () => {
      const input = 'i really love jelly'
      
      const expected = '42 245111131345 13431551 4251131345'
      const actual = polybiusModule.polybius(input, encode)
      expect(actual).to.equal(expected)
    })
    it ('should ignore spaces', () => {
      const input = 'aa a a a'
      
      const expected = '1111 11 11 11'
      const actual = polybiusModule.polybius(input, encode)
      expect(actual).to.equal(expected)
    })
  })
  describe('Decoding a message', () => {
    const encode = false
    it('should decode a message', () => {
      const input = '214321'
      
      const expected = 'bob'
      const actual = polybiusModule.polybius(input, encode)
      expect(actual).to.equal(expected)
    })
    it('should translate both "i" and "j"', () => {
      const input = '42 13425251 4251131345'
      
      const expected = '(i/j) l(i/j)ke (i/j)elly'
      const actual = polybiusModule.polybius(input, encode)
      expect(actual).to.equal(expected)
    })
    it('should leave spaces', () => {
      const input = '21432134 21542422512434'  

      const expected ='bobs burgers'
      const actual = polybiusModule.polybius(input, encode)
      expect(actual).to.equal(expected)
    })
  })
}) 