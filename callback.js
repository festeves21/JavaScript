function myFunctionCallBack(){
    console.log("Saludo Asincrono despues de 3 segundos");
}

console.log("Saludo Normal");
setTimeout(myFunctionCallBack,3000);

setTimeout(function(){console.log('Saludo despues de 2')},4000);
setTimeout( ()=> console.log('saludo asincrono 3'),1000);