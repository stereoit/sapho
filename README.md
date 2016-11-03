Piglatinaze This!
=================

Simple translator form adults to child's speak.

Rules
-----

Words that start with a consonant have their first letter moved to the end of the word and the letters “ay” added to the end.
 - *Hello* becomes *Ellohay*

Words that start with a vowel have the letters “way” added to the end.
 - _apple_ becomes _appleway_

Words that end in “way” are not modified.
 - _stairway_ stays as _stairway_

Punctuation must remain in the same relative place from the end of the word.
 - _can’t_ becomes _antca’y_
 - _end._ becomes _endway_.

Hyphens are treated as two words
 - _this-thing_ becomes _histay-hinstay_

Capitalization must remain in the same place.
 - _Beach_ becomes _Eachbay_
 - _McCloud_ becomes _CcLoudmay_


Installation and running
------------------------

     $ git clone git@github.com:stereoit/sapho.git
     $ cd spaho
     $ yarn install
     $ rollup -c
     $ node server.js
