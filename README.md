Piglatinaze This!Piglatinaze This!
==================================

Simple translator form adults to child's speak.

It has thos rules:

Words that start with a consonant have their first letter moved to the end of the word and the letters “ay” added to the end.
 - Hello becomes Ellohay

Words that start with a vowel have the letters “way” added to the end.
 - apple becomes appleway

Words that end in “way” are not modified.
 - stairway stays as stairway

Punctuation must remain in the same relative place from the end of the word.
 - can’t becomes antca’y
 - end. becomes endway.

Hyphens are treated as two words
 - this-thing becomes histay-hinstay

Capitalization must remain in the same place.
 - Beach becomes Eachbay
 - McCloud becomes CcLoudmay

 Installation and running
 ------------------------

     $ git clone git@github.com:stereoit/sapho.git
     $ cd spaho
     $ yarn install
     $ rollup -c
     $ node server.js
