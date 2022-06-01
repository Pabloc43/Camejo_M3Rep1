

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

function esBisiesto(anio){
    return (anio % 400 == 0) ? true : ((anio % 100 == 0) ? false : anio % 4 == 0);
}

function fechaValida(fecha){
    let dia = parseInt((fecha[0]  +  fecha[1]));
    let mes = parseInt((fecha[3]  +  fecha[4]));
    let anio = parseInt((fecha[6]  +  fecha[7] + fecha[8] + fecha[9]));
    return (mes <= 12 && mes >= 1) && ((mes != 2 && (mesCorrecto(mes) >= dia && dia >= 1)) || 
    ((!esBisiesto(anio) && dia <= 28 && dia >= 1) || (esBisiesto(anio) && dia <= 29 && dia >= 1))) ? 
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


//Ejercicio 3 JS (no considere bisiestos)
function tuEdad(nacimiento){
    let anioActual = new Date().getFullYear();
    let mesActual = new Date().getMonth() + 1;
    let diaActual = new Date().getDate();

    let anioNacio = parseInt(nacimiento[0] + nacimiento[1] + nacimiento[2] + nacimiento[3])
    let difAños = anioActual - anioNacio
    let difMes = mesActual - parseInt(nacimiento[5] + nacimiento[6]);
    let difDia = diaActual - parseInt(nacimiento[8] + nacimiento[9])
    let edad = difAños;
    edad = (difAños != 0 && difMes < 0)  ?  edad-1 : edad;
    edad = (difAños != 0 && difMes == 0) && difDia > 0  ?  edad-1 : edad;
    return console.log(`Su edad es: ${edad} años`, difAños, difMes, difDia)

}

tuEdad("2020-05-01")
/*
function calculate_age(birth_month, birth_day, birth_year) {
        today_date = new Date();
        today_year = today_date.getFullYear();
        today_month = today_date.getMonth();
        today_day = today_date.getDate();
        age = today_year - birth_year;
      
        if (today_month < (birth_month - 1)) {
          age--;
        }
        if (((birth_month - 1) == today_month) && (today_day < birth_day)) {
          age--;
        }
        console.log(age);
      }
 */