// PigLatin
// ========
//
// Words that start with a consonant have their first letter moved to the end of the word and the letters “ay” added to the end.
//  - Hello becomes Ellohay
//
// Words that start with a vowel have the letters “way” added to the end.
//  - apple becomes appleway
//
// Words that end in “way” are not modified.
//  - stairway stays as stairway
//
// Punctuation must remain in the same relative place from the end of the word.
//  - can’t becomes antca’y
//  - end. becomes endway.
//
// Hyphens are treated as two words
//  - this-thing becomes histay-hinstay
//
// Capitalization must remain in the same place.
//  - Beach becomes Eachbay
//  - McCloud becomes CcLoudmay

module.exports = (function(){

  // vowels
  var vowels = 'aeiouAEIOU';
  // if (vowels.indexOf(letter.toLowerCase()) !== 1) {}

  // consonants
   var consonants = ' bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ';

  // just stub implementation for now
  function piglatinize(text) {
    var tokens = text.split(' ')

    // process each tokens
    var latinized = tokens.map(function(token){
      return token
    })

    return latinized.join(' ');
  }



  return {
      piglatinize: piglatinize
  }

})();
