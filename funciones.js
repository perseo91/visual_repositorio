let x=$(document);
x.ready(inicializarEventos);
function inicializarEventos(){
  x=$("#boton1");
  x.click(presionarBoton);
}  
function presionarBoton(){
  alert("Se ha presionado el boton hace un instante");
}  
  


