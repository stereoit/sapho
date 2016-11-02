var puzzle = [41, 53, 2, 58, 37, 56, 6, 64, 61, 46, 50, 12],
  solutions = [],
  tmp = '';

for (var shift = 0; shift < 50; shift++) {
  tmp = '';
  for (var i = 0; i < puzzle.length; i++) {
    tmp += String.fromCharCode(puzzle[i] -i + shift);
    solutions[shift] = function(val) {
      return function() {
        console.log(val);
      }
    }(tmp)
  }
}


for (var sol in solutions) {
  solutions[sol]();
}
