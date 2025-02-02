// Array para almacenar nombres de amigos
let amigos =[];

// Funcion para agregar un amigo
function agregarAmigo(){
    const inputAmigo = document.getElementById('amigo');
    const nombreAmigo = inputAmigo.value.trim();

    // validar que el campo no este vacio
    if (nombreAmigo === ""){
        alert("Por Favor, Ingrese un nombre.");
        return;   // Detiene la ejecucion de la funcion
    }

    // validar que el nombre no este duplicado
    if(amigos.includes(nombreAmigo)){
        alert(`El nombre ${nombreAmigo} ya esta en la lista`);
        return; 
    }

    //Agregar el nombre al array de amigos
    amigos.push(nombreAmigo);

    //Limpiar el campo de entrada
    inputAmigo.value = "";

    //Actualizar la lista en el HTML
    actualizarLista();
}

// funcion para actualizar la lista de amigos en la interfaz
function actualizarLista(){
    const listaAmigos = document.getElementById('listaAmigos');

    //Limpiar el contenido actual de la lista
    listaAmigos.innerHTML = "";  //Borra cualquier contenido previo dentro del contenedor de la lista

    //Recorrer el array con un ciclo for
    for(let i = 0; i < amigos.length; i++){
        const li = document.createElement('li');
        li.textContent = amigos[i];
        listaAmigos.appendChild(li);
    }
}

//Funcion para elegir un amigo aleatorio
function sortearAmigo(){ 
    //Validar que hay amigos disponibles
    if(amigos.length == 0){ 
        alert("No hay amigos disponibles para sortear. Agrega al menos uno.");
        return;
    }

    //Genera un indice aleatorio
    const indiceAleatorio = Math.floor(Math.random() * amigos.length); 

    //Obtener el nombre sorteado
    const amigoSorteado = amigos[indiceAleatorio]; 

    //Mostrar el resultado en el HTML
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = ""; // Limpiar resultado anterior

    const li = document.createElement('li');
    li.innerHTML = `Amigo sorteado: <strong>${amigoSorteado}</strong>`;
    resultado.appendChild(li);
}
