'use strict'

var chai = require('chai');
var expect = chai.expect;
var PigLatin = require('../piglatin');

describe('PigLatin', function() {
  it('Hello becomes Ellohay', function() {
    var source = 'Hello'
      , latinized = 'Ellohay';
    expect(PigLatin.piglatinize(source)).to.equal(latinized)
  });

  it('apple becomes appleway', function() {
    var source = 'apple'
      , latinized = 'appleway';
    expect(PigLatin.piglatinize(source)).to.equal(latinized)
  });

  it('stairway stays as stairway', function() {
    var source = 'stairway'
      , latinized = 'stairway';
    expect(PigLatin.piglatinize(source)).to.equal(latinized)
  });

  //  c!an't -> cant -> antcay -> antcay -> antcay
  it('Punctuation must remain in the same relative place from the end of the word', function() {
    var source = "c!an't"
      , latinized = "ant!ca'y";
    expect(PigLatin.piglatinize(source)).to.equal(latinized)
  });

  it('Punctuation must remain in the same relative place from the end of the word 2', function() {
    var source = "end."
      , latinized = "endway."
    expect(PigLatin.piglatinize(source)).to.equal(latinized)
  });

  it('Hyphens are treated as two words', function() {
    var source = 'this-thing'
      , latinized = 'histay-hingtay';
    expect(PigLatin.piglatinize(source)).to.equal(latinized)
  });

  it('Capitalization must remain in the same place.', function() {
    var source = 'Beach'
      , latinized = 'Eachbay';
    expect(PigLatin.piglatinize(source)).to.equal(latinized)
  });

  it('Capitalization must remain in the same place. 2', function() {
    var source = "McCloud"
      , latinized = "CcLoudmay"
    expect(PigLatin.piglatinize(source)).to.equal(latinized)
  });

  it('Capitalization must remain in the same place. 3', function() {
    var source = "McCloudBeach"
      , latinized = "CcLoudbEachmay"
    expect(PigLatin.piglatinize(source)).to.equal(latinized)
  });

  it('Keep whitespace as is.', function() {
    var source = 'stairway way  starway';
    expect(PigLatin.piglatinize(source)).to.equal(source)
  });

});
