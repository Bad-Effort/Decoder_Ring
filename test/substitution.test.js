// Write your tests here!
const expect = require('chai').expect;
const substitutionModule = require("../src/substitution.js")


describe('substitution(Module) tests written by yours truly', () => {
  describe('Error handling', () => {
    it('should return false sub-alphabet is missing', () => {
      const input = 'bob';
      const alpha = undefined;
      
      const expected = false
      const actual = substitutionModule.substitution(input, alpha)
      expect(actual).to.equal(expected)
    })
    it('should return false if sub-alphabet is not exactly 26 charaters long', () => {
      const input = 'bob';
      const alpha = undefined;
      
      const expected = false
      const actual = substitutionModule.substitution(input, alpha)
      expect(actual).to.equal(expected)
    })
    it('should return false if every charater in the alphabet is not unique', () => {
      const input = 'bob';
      const alpha = undefined;
      
      const expected = false
      const actual = substitutionModule.substitution(input, alpha)
      expect(actual).to.equal(expected)
    })
  })
  describe('Encoding a message', () => {
    it('should encode a message by using the given substitution alphabet', () => {
      const input = 'false';
      const alpha = 'qwert1234567890yuiopasdfgh';
      
      const expected = '1q7ot'
      const actual = substitutionModule.substitution(input, alpha)
      expect(actual).to.equal(expected)
    })
    it('should work with any kind of key with unique characters', () => {
      const input = 'hello world';
      const alpha = 'qwert12^456$890yuiopasdfgh';
      
      const expected = '^t$$0 d0i$r'
      const actual = substitutionModule.substitution(input, alpha)
      expect(actual).to.equal(expected)
    })
    it ('should preserve spaces', () => {
      const input = 'bobs burgers';
      const alpha = 'qwert1234567890yuiopasdfgh';
      
      const expected = 'w0wo wai2tio'
      const actual = substitutionModule.substitution(input, alpha)
      expect(actual).to.equal(expected)
    })
  })
  describe('Decoding a message', () => {
    const encode = false
    it('should decode a message by using the given substitution alphabet', () => {
      const input = 'piat';
      const alpha = 'qwert1234567890yuiopasdfgh';
      
      const expected = 'true'
      const actual = substitutionModule.substitution(input, alpha, encode)
      expect(actual).to.equal(expected)
    })
    it('should work with any kind of key with unique characters', () => {
      const input = '^q8';
      const alpha = 'qwert12^456$890yuiopasdfgh';
      
      const expected = 'ham'
      const actual = substitutionModule.substitution(input, alpha, encode)
      expect(actual).to.equal(expected)
    })
    it('should preserve spaces', () => {
      const input = 'ytq9ap wappti q9r 5t77g';
      const alpha = 'qwert1234567890yuiopasdfgh';
      
      const expected = 'peanut butter and jelly'
      const actual = substitutionModule.substitution(input, alpha, encode)
      expect(actual).to.equal(expected)
    })
  })
}) 