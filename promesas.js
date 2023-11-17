let miPromesa = new Promise((resolver, rechazar) =>{

    let expresion = false;

    if(expresion)
        resolver('Resolvio Correcto');
    else
        rechazar('Se produjo un error');
});

/*miPromesa.then(
    valor => console.log(valor),
    error => console.log(error)
);*/

//caso de catch

miPromesa.
then(valor => console.log(valor)).
catch(error => console.log(error));

let promesa = new Promise((resolver)=>{
    console.log("Inicio Promesa");
    setTimeout(() => {
        resolver('SALUDOS CON PROMESA Y TIMEOUT') },1500);
});

promesa.then(valor => console.log(valor));


//asyn indica que una funciona regresa una promesa

async function miFuncionConPromesa(){
    return 'saludos con promesa y async'
}

