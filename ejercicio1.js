function ejercicio1(n) {
  var espacios = function(n) {
    var spaces = '';
    for (var i = 0; i < n; i++){
      spaces += ' ';
    }
    return spaces;
  }
  for (var i = 0; i < n; i++){
    var arriba = '';
    for(var j=1; j<= i+1; j++){
      arriba += j;
    }
    console.log(arriba);
  }
  for (var i = 0; i < n; i++){
    var abajo = '';
    for (var j = n-i; j>= 1; j--){
      abajo +=j;
    }
    console.log(espacios(n) + abajo);
  }
}

ejercicio1(4);
