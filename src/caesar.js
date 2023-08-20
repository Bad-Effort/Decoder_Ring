// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz' //you can use either alphabet
  /*const alphabet = [
    'a','b','c','d','e','f','g','h','i','j','k','l','m',
    'n','o','p','q','r','s','t','u','v','w','x','y','z'
  ]; */  
  // you can add any code you want within this function scope

  function caesar(input, shift, encode = true) {
    let encodedMessage = '';
    
    if (!shift || shift === 0 || shift > 25|| shift < -25 || !input) return false
    if (encode === false) shift *= -1
    input = input.toLowerCase()
    
    for (let i = 0; i < input.length; i++) {
      if (alphabet.includes(input[i])) {
        const index = alphabet.indexOf(input[i])
        let indexShift = index + shift
     
        if (indexShift > 25) indexShift -= 26
        if (indexShift < 0) indexShift += 26
        
        encodedMessage += alphabet[indexShift] //Adds the new letter to the encodedMessage
      }
      else encodedMessage += input[i]
    }
    return encodedMessage
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
