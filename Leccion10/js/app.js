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
    cargarEgresos();
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
    let ingresosHTML='';
    for(let ingreso of ingresos){
        ingresosHTML += crearIngresoHTML(ingreso);
        //console.log(ingresosHTML);
    }
    const xxs = document.getElementById('lista-ingresos')
    
    //console.log(xxs);
    xxs.innerHTML = ingresosHTML


}

const crearIngresoHTML = (ingreso) => {
    let variablehtml = `
    <div class="elemento limpiarEstilos">
    <div class="elemento_descripcion">${ingreso.descripcion}</div>
    <div class="derecha limpiarEstilos">
      <div class="elemento_valor">${formatoMoneda(ingreso.valor)}</div>
      <div class="elemento_eliminar">
        <button class="elemento_eliminar--btn">
          <ion-icon name="close-outline" onclick='eliminarIngreso(${ingreso.id})'></ion-icon>
        </button>
      </div>
    </div>
  </div>
    `;
    return variablehtml;
}

const cargarEgresos = ()=>{
    let egresosHTML='';
    let totalegreso = totalEgresos();
    let porcentaje =0;
    for(let egreso of egresos){
        porcentaje=egreso.valor/totalegreso;
        egresosHTML += crearEgresoHTML(egreso,porcentaje);
        
    }
    const xxs = document.getElementById('lista-egresos')
    //console.log(egresosHTML);
    //console.log(xxs);
    xxs.innerHTML = egresosHTML


}

const crearEgresoHTML = (egreso, porcentaje) => {
    let variablehtml = `
        <div class="elemento limpiarEstilos">
            <div class="elemento_descripcion limpiarEstilos">${egreso.descripcion}</div>
            <div class="derecha limpiarEstilos">
                <div class="elemento_valor">${formatoMoneda(egreso.valor)}</div>
                <div class="elemento_porcentaje">${formatoPorcentaje(porcentaje)}</div>
                <div class="elemento_eliminar">
                    <button class="elemento_eliminar--btn">
                        <ion-icon name="close-circle-outline" onclick='eliminarEgreso(${egreso.id})' ></ion-icon>
                    </button>
                </div>
            </div>
        </div>
    `;
    return variablehtml;
}

const eliminarIngreso = (id)=>{
    let indiceEliminar = ingresos.findIndex( ingreso =>ingreso.id === id );
    ingresos.splice(indiceEliminar,1);
    cargarCabecero();
    cargarIngresos();

}

const eliminarEgreso = (id)=>{
    let indiceEliminar = egresos.findIndex( egreso =>egreso.id === id );
    egresos.splice(indiceEliminar,1);
    cargarCabecero();
    cargarEgresos();

}

let agregarDato = () =>{
    let forma = document.forms['forma'];
    let tipo = forma['tipo'];
    let descripcion = forma['descripcion']
    let valor = forma['valor'];

    if(descripcion.value !== '' && valor !== ''){
        if(tipo.value === 'ingreso'){
            ingresos.push( new Ingreso(descripcion.value, Number(valor.value)));
            cargarCabecero();
            cargarIngresos();
        }else if (tipo.value === 'egreso' ){
            egresos.push( new Egreso(descripcion.value, +valor.value));
            cargarCabecero();
            cargarEgresos();
        }
    }

}