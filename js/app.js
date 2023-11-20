
    console.log('Aplicacion Calculadora');
function sumar(){
  const forma = document.getElementById('forma') ;

  let operandoA = forma['operandoA'];
  let operandoB = forma['operandoB'];
  

  let resultado = parseInt(operandoA.value) + parseInt(operandoB.value);
    if (isNaN(resultado))
        resultado = 'Los valores no son numericos';   
    
        document.getElementById('resultado').innerHTML = resultado;
    
    
}