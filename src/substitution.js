// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  let originalAlphabet = "abcdefghijklmnopqrstuvwxyz"

  function substitution(input, alphabet, encode = true) {
    let message = ''
    let index;
    
    //error handeling
    if (!alphabet || alphabet.length != 26) return false
    for (let i = 0; i < alphabet.length; i++) {
      let alphabetCheck = alphabet.substring(i+1 ,alphabet.length)
      if (alphabetCheck.includes(alphabet[i])) return false
    }
    
    //could simplfy this down to one
    if (encode) {
      for (let i = 0; i < input.length; i++) {
        index = originalAlphabet.indexOf(input[i])
        if (index === -1) message += ' '
        else message += alphabet[index]
      }
    }
    if (!encode) {
      for (let i = 0; i < input.length; i++) {
        index = alphabet.indexOf(input[i])
        if (index === -1) message += ' '
        else message += originalAlphabet[index]
      }
    }
    
    return message
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
