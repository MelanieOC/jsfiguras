function ejercicio2(n) {
  for(var i = 0; i < n; i++){
    var respuesta = '';
    for (var j= 1; j<=n-i; j++){
        respuesta += j;
    }
    console.log(respuesta);
  }
}
ejercicio2(5);
