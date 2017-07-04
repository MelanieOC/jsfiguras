function ejercicio5(r) {
  var circle = [];
  var espacios = [];
  for (var x = 0; x <= r; x++){
    var y = Math.sqrt(r*r - x*x);
    var circulo='';
    for (var j = 0; j <= y; j++) {
      circulo+='**';
    }
    circle.push(circulo);
    var e = '';
    for(var i = 0; i < r - y;i++){
      e += '  ';
    }
    espacios.push(e);
  }

  for (var i = espacios.length -1; i >=0 ; i--) {
    console.log (espacios[i] + circle[i] + circle[i] );
  }
  for (var i = 0; i < circle.length; i++) {
    console.log (espacios[i] + circle[i] + circle[i] );
  }
}

ejercicio5(15);
