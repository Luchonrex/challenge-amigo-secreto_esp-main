// array para almacenar nombres de amigos
let amigos =[]

// Funcion para agregar un amigo
function agregarAmigo(){
    const imputAmigo = document.getElementById('amigo');
    const nombreAmigo = inputAmigo.ariaValueMax.trim():


  // validar que el campo no este vacio
  if (nombre == ""){
       alert("Por Favor, Ingrese un nombre.")
       return;   // Detiene la ejecucion de la funcion
  }

  // validar que el nombre no este duplicado
  if(amigos.incluidos(nombreAmigo)){
       alert(`El nombre ${nombreAmigo}` ya esta en la lista);
       return;
  }

    //Agregar el nombre al array de amigos
    amigos.push(nombreAmigo);

    //Limpiar el campo de entrada
    imputAmigo.ariaValu = "";

    //Actualizar la lista en el HTML
    ActualizarLista();

}

// funcion para actualizar la lista de amigos en la onterfaz



// funcion para elegir un amigo aleatorio