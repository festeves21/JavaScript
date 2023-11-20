const mostrarReloj = ()=>{
    let fecha = new Date();
    let hr = formatoHora(fecha.getHours());
    let min = formatoHora(fecha.getMinutes());
    let seg = formatoHora(fecha.getSeconds());

    //document.getElementById('hora').innerHTML = 1000;

    document.getElementById('hora').innerHTML = ` ${hr}:${min}:${seg}`;

    const meses =['Enero','Febrero','Marzo', 'Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];
    const dias = ['Domingo','Lunes','Martes' ,'Miercoles','Jueves','Viernes','Sabado']

    let diaSemana = dias[fecha.getDay()];
    let mesString = meses[fecha.getMonth()];
    let dia = fecha.getDay();
    let mes = fecha.getMonth();

    let fechaTexto = `${diaSemana} , ${dia} ${mesString}`;

    document.getElementById('fecha').innerHTML = fechaTexto;

}

const formatoHora = (hora) => {
    if( hora <10){
        hora = '0'+ hora;   
    }
    return hora;
}


 setInterval( mostrarReloj,1000)