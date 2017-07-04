function ejercicio3(n) {
  var espacios = function (n) {
    var s = "";
    for (var i = 0; i < n; i++)
     s += " ";
    return s;
  }
  for(var i=0; i < n; i++){
    var respuesta = '';
    for(var j=1; j<=i+1; j++){
      respuesta += j;
    }
    for(var k=i; k>=1; k--){
      respuesta +=k;
    }
    console.log(espacios(n-(i+1)) + respuesta);
  }
}
ejercicio3(4);
