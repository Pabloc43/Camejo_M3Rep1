

//Ejercicio 1 JS 
function fechaHoy(){
    let fechaAnio = new Date().getFullYear();
    let fechaMes = new Date().getMonth() + 1;
    let fechaDia = new Date().getDate();
    return [fechaAnio, fechaMes, fechaDia].join('-')
}
//console.log(fechaHoy())


//Ejercicio 2 JS NO VALIDO PARA ANIOS < 1000
function mesCorrecto(mes){
    switch (mes) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            return 31;
        default:
            return 30;
    }
}

function esBisisesto(anio){
    return (anio % 400 == 0) ? true : (anio % 100 == 0) ? false : anio % 4 == 0;
}

function fechaValida(fecha){
    let dia = parseInt((fecha[0]  +  fecha[1]));
    let mes = parseInt((fecha[3]  +  fecha[4]));
    let anio = parseInt((fecha[6]  +  fecha[7] + fecha[8] + fecha[9]));
    return (mes <= 12 && mes >= 1) && ((mes != 2 && (mesCorrecto(mes) >= dia && dia >= 1)) || 
    ((!esBisisesto(anio) && dia <= 28 && dia >= 1) || (esBisisesto(anio) && dia <= 29 && dia >= 1))) ? 
    console.log("Es valida") : console.log("No es valida") 
}

/*
fechaValida('29/02/2024');
fechaValida('28/02/2022');
fechaValida('29/02/2022');
fechaValida('31/06/2022');
fechaValida('32/10/2022');
fechaValida('31/10/2022');
fechaValida('30/13/2022');
*/


//Ejercicio 3 JS