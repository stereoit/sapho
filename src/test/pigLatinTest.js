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


  it('Punctuation must remain in the same relative place from the end of the word', function() {
    var source = "can't"
      , latinized = 'antca’y';
    expect(PigLatin.piglatinize(source)).to.equal(latinized)

    source = "end."
    latinized = "endway."
    expect(PigLatin.piglatinize(source)).to.equal(latinized)
  });

  it('Hyphens are treated as two words', function() {
    var source = 'this-thing'
      , latinized = 'histay-hinstay';
    expect(PigLatin.piglatinize(source)).to.equal(latinized)
  });

  it('Capitalization must remain in the same place.', function() {
    var source = 'Beach'
      , latinized = 'Eachbay';
    expect(PigLatin.piglatinize(source)).to.equal(latinized)

    source = "McCloud"
    latinized = "CcLoudmay"
    expect(PigLatin.piglatinize(source)).to.equal(latinized)
  });

});
