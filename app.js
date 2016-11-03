import Piglatin from './piglatin';

console.log(Piglatin.piglatinize("Hello World!"))

let plInput = document.getElementById("plInput")
  , display = document.getElementById("translatedText")

if (plInput && display) {
  plInput.addEventListener("keyup", function(event){
    const text = event.target.value
    display.textContent = Piglatin.piglatinize(text)
  });
} else {
  console.log("Need #plInput and #translatedText elements on the page!");
}
