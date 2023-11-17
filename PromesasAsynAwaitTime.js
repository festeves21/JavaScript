//Promesa Aync , Await, TimeOut

async function funcionConPromesaAsyncTimeout(){
    console.log( 'Inicio de  Funcion');
    let miPromesa = new Promise( resolver => {
        setTimeout(() => resolver('Promesa con await y timeout'), 3000);
    });
    console.log( 'Antes de funcion');
    console.log( await miPromesa);
    console.log( 'Fin de  Funcion');
}

funcionConPromesaAsyncTimeout();
console.log( 'Hola mundo 2');
