// let links = document.querySelectorAll("a");

// links.forEach(function(link){
//     console.log(link);
// });
//obtener los elementos de cada clase
let links=document.querySelectorAll(".close");

//recorrerlos
links.forEach(function(link){
//agregar un evento click en cada una de ellos

    link.addEventListener("click",function(ev){
        ev.preventDefault();
        //return false; //este comando no funciona
        let content=document.querySelector('.content')

       
    setTimeout(function(){
        location.href="/boletines";
    },1000);

    return false;
    });
   
});



/*
// obtendremos los iconos de cada clase 
// let se ocupa para indicar mientras que document hace referencia al
// docuento en si mientras querySelectorAll se encarga de seleccionar 
// los elementos indicados como "i"
let iconos = document.querySelectorAll("i");
//recorremos el arreglo 
iconos.forEach(function(icono){
    //classList es una clase la cual posee un metodo para remover o agregar 
    icono.classList.remove("fa-solid");
    icono.classList.add("fa-solid");
    
})*/
