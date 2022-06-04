// Para asegurarnos que se ejecute una vez se cargo el html
$(function() {

    //Actividad 1
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
        nombre = $('#Nombre').val();
        email = $('#email').val();
        mensaje = $('#mensaje').val();
        $('#gracias').text(`Gracias ${nombre} por comunicarse con nosotros.`)
    })


    //Actividad 3
let colores = ["red", "green", "blue", "white"];
for (let i = 0; i < $('button').length; i++) {
    $(`#btn${i+1}`).on("click", function(){
        $('#body').css({'background-color': colores[i]})
})};


// Actividad 4
$('#btn5').on('click', function(){
    if (!activa()) {
        divImagen.append(imagen);
    } else{
        imagen.remove()
    }
})

function activa(){
    return imagen.parentNode == divImagen
}
let divImagen = $('#imagenC')[0];
let imagen = $('<img/>')[0];
console.log(imagen)

imagen.src = 'img/imagen.jpg';

})