// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  const alphabet = [
    ['a','b','c','d','e',],
    ['f','g','h','(i/j)','k'],
    ['l','m','n','o','p'],
    ['q','r','s','t','u'],
    ['v','w','x','y','z']]
  
  function encoding(input) {    
    let result = ''
    let indexRow;
    let indexColumn;
    
    for (let i = 0; i < input.length; i++) {
      for (let z = 0; z < alphabet.length; z++) {
        switch (alphabet[z].indexOf(input[i])){
          default:
            indexColumn = alphabet[z].indexOf(input[i]) + 1
            indexRow = z + 1
          case -1:
            break;
        }
      }
      if (input[i] === 'i' || input[i] === 'j') {
        indexColumn = '4'
        indexRow = '2'
      }
      
      if (indexRow === -1 && indexColumn === -1) result += ' '
      else result += indexColumn.toString() + indexRow.toString()
      indexRow = -1
      indexColumn = -1
    }
    return result
  }
  
  function decoding(input) {
    let message = ''
    let indexColumn;
    let indexRow;
    
    for (let i = 0; i < input.length; i += 2) {
      if (input[i] === ' ') {
        i -= 1
        message += ' '
      }
      else {
        indexColumn = input[i]
        indexRow = input[i+1] //add one, counter counts by 2, every letter requires 2 numbers
        message += alphabet[indexRow - 1][indexColumn - 1]
      }
    }
    return message
  }

  function polybius(input, encode = true) {
    let inputCheck = input
    for (let i = 0; i < input.length; i++) {
      inputCheck = inputCheck.replace(' ', '')
    } //gets ride of multiple spaces
    let message = '';

    if (inputCheck.length % 2 != 0 && encode === false) return false
    
    if (encode) message = encoding(input)
    if (!encode) message = decoding(input)
    
    return message
  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
