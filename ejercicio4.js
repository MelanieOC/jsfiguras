function ejercicio4(r) {
  var circle = [];
  for (var x = 0; x <= r; x++){
    var y = Math.sqrt(r*r - x*x);
    var circulo='';
    for (var j = 0; j <= y; j++) {
      circulo+='**';
    }
    circle.push(circulo);
  }

  for(var i = circle.length - 1; i >=0; i--){
    console.log(circle[i]);
  }
  for(var i = 0; i < circle.length; i++){
    console.log(circle[i]);
  }
}
ejercicio4(15);
