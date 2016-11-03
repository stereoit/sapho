// revealing module pattern used here
var piglatin = (function() {

  // vowels
  var vowels = 'aeiouAEIOU';

  // consonants
  var consonants = ' bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ';

  // regexes  for matching upperCase chars and Punctuation
  var upperCaseRe = /[A-Z]/g,
    punctuationRe = /['’!.]/g;

  // creates list of matching indexes for given regex
  function regexIndexes(regex, token) {
    var indexes = [],
      match, tokenLength = token.length;

    while ((match = regex.exec(token)) != null) {
      indexes.push({
        obj: match[0],
        index: match.index,
        lastIndex: tokenLength - match.index - 1
      });
    }
    return indexes
  }

  // length|ending 'way'|consonant|vowel test
  function latinize(token) {
    if (token.length > 1) {
      var result = token,
        firstChar = token.charAt(0);
      if ((token.length == 1) || (token.length >= 3 && token.slice(-3) === "way")) {
        result = token; // noop
      } else if (vowels.indexOf(firstChar) !== -1) {
        // we have vowel
        result = token + "way";
      } else if (consonants.indexOf(firstChar !== -1)) {
        result = token.slice(1) + firstChar + "ay";
      }
      token = result;
    }
    return token
  }

  // just stub implementation for now
  function piglatinize(text) {
    var tokens = text.split(' ');

    // process each tokens
    var latinized = tokens.map(function(token) {

      // further split by hyphenation
      var subTokens = token.split('-');

      subTokens = subTokens.map(function(token) {
        // take punctuation map and remove punctuation
        var punctuationIdx = regexIndexes(punctuationRe, token);
        token = token.replace(punctuationRe, '');

        // take Capitalization map and alowercase all
        var upperCaseIdx = regexIndexes(upperCaseRe, token);
        token = token.toLowerCase();

        // length|ending 'way'|consonant|vowel test
        token = latinize(token);

        // apply Capitalization map back to result
        upperCaseIdx.forEach(function(match) {
          token = token.slice(0, match.index) +
            token.charAt(match.index).toUpperCase() +
            token.slice(match.index + 1);
        });

        // appply punctuation map back to result
        punctuationIdx.reverse(); // to keep the relative positions
        punctuationIdx.forEach(function(match) {
          token = token.slice(0, token.length - match.lastIndex) +
            match.obj +
            token.slice(token.length - match.lastIndex);
        });

        return token

      });

      // join based on hyphenation
      token = subTokens.join('-');

      return token
    });

    return latinized.join(' ');
  }



  // revealing module to express what is returned
  return {
    piglatinize: piglatinize
  }

})();

console.log(piglatin.piglatinize("Hello World!"));

let plInput = document.getElementById("plInput");
let display = document.getElementById("translatedText");

if (plInput && display) {
  plInput.addEventListener("keyup", function(event){
    const text = event.target.value;
    display.textContent = piglatin.piglatinize(text);
  });
} else {
  console.log("Need #plInput and #translatedText elements on the page!");
}
//# sourceMappingURL=bundle.js.map
