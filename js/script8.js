// Para asegurarnos que se ejecute una vez se cargo el html
$(function() {

    //Actividad 1
    let parrafos = $('p');

    for(let i = 0; i < $('p').length; i++){
        $(`#p${i+1}`).on("mouseenter", function() {
            $(`#p${i+1}`).css({
                "color" : "red",
                "font-size" : "20px",
                "border" : "green 2px solid"                
            })
        });
        $(`#p${i+1}`).on("mouseleave",function() {
        $(`#p${i+1}`).css({
                "color" : "black",
                "font-size" : "16px",
                "border" : "none"                
            })
        });
    }   
    console.log($('p'));


    //Actividad 2
    let nombre;
    let email;
    let mensaje;
    $('#enviar').on("click", function(){
        nombre = $('#Nombre').value;
        email = $('#email').value;
        mensaje = $('#mensaje').value;
        $('#gracias').text(`Gracias ${x} por comunicarse con nosotros.`)
    })


    //Actividad 3
})








// Actividad 3
let body = document.getElementsByTagName("body")[0];
let botones = document.querySelectorAll("button");
let colores = ["red", "green", "blue", "white"];
for (let i = 0; i < botones.length; i++) {
    if (botones[i].id == "enviar" || botones[i].id == "btn5") continue;
    botones[i].addEventListener("click", function(){
        body.style.backgroundColor = `${colores[i]}`
    });  
};

// Actividad 4
let botonImagen = document.getElementById('btn5');
botonImagen.addEventListener('click', function(){
    if (!activa()) {
        divImagen.appendChild(imagen);
    } else{
        divImagen.removeChild(imagen)
    }
})

function activa(){
    return imagen.parentNode == divImagen
}
let divImagen = document.getElementById('imagenC');
let imagen = document.createElement('img');
imagen.src = 'img/imagen.jpg';
