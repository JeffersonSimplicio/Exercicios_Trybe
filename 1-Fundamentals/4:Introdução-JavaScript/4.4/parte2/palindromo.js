function palindrome(palavra) {
  inverted = palavra.split('').reverse().join('');
  if (inverted == palavra) {
    return true
  } else {
    return false
  }
}

console.log(palindrome('desenvolvimento'));
