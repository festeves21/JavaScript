const egresos = [
    new Egreso('Renta Departament',900),
    new Egreso('Ropa',400)
];

const ingresos = [
    new Ingreso('Salario', 3100.00),
    new Ingreso('Venta Coche', 1500)
];




let cargarApp = ()=> {
    cargarCabecero();
    cargarIngresos();
}

let totalIngresos = () =>{
    let totalIngreso = 0;
    for ( let ingreso of ingresos){
        totalIngreso+= ingreso.valor;
    }
    return totalIngreso;
}

let totalEgresos = () => {
    let totalEgreso = 0;
    for ( let egreso of egresos){
        totalEgreso += egreso.valor
    }
    return totalEgreso;
}

let cargarCabecero = () =>{
    let presupuestoTotal = totalIngresos() - totalEgresos();
    let porcentajeEgreso = totalEgresos() / totalIngresos();

    document.getElementById('presupuesto').innerHTML = formatoMoneda(presupuestoTotal);
    document.getElementById('porcentaje').innerHTML = formatoPorcentaje(porcentajeEgreso);
    document.getElementById('ingresos').innerHTML = formatoMoneda(totalIngresos());
    document.getElementById('egresos').innerHTML = formatoMoneda(totalEgresos());


}


const formatoMoneda = (valor)=>{
    return valor.toLocaleString('en-Us', { style:'currency',currency:'USD', minimunFractionDigits:2 });
}

const formatoPorcentaje =(valor)=>{
    return valor.toLocaleString('en-Us',  { style: 'percent', minimunFractionDigits: 2 });
}

const cargarIngresos = ()=>{
    let ingresosHTML = 'x';
    for(let ingreso of ingresos){
        ingresosHTML += crearIngresoHTML(ingreso);
        console.log(ingresosHTML);
    }
    document.getElementById('lista-ingresos').innerHTML = ingresosHTML

}

const crearIngresoHTML = (ingreso) => {
    let variablehtml = `
    <div class="elemento limpiarEstilos">
    <div class="elemento_descripcion">${ingreso.descripcion}</div>
    <div class="derecha limpiarEstilos">
      <div class="elemento_valor">${formatoMoneda(ingreso.valor)}</div>
      <div class="elemento_eliminar">
        <button class="elemento_eliminar--btn">
          <ion-icon name="close-outline"></ion-icon>
        </button>
      </div>
    </div>
  </div>
    `;
    return variablehtml;
}