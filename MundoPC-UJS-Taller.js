class DispositivoEntrada{
    
    static contadorOrdenes = 0;

    constructor(tipoEntrada,marca){
        this._tipoEntrada = tipoEntrada;
        this._marca = marca;
    }


    get tipoEntrada(){
        return this._tipoEntrada;
    }

    set tipoEntrada(tipoEntrada){
        this._tipoEntrada = tipoEntrada
    }

    get marca(){
        return this._marca;
    }

    set marca(marca){
        this._marca = marca
    }

    
}

class Raton extends DispositivoEntrada{

    static contadorRatones = 0;

    constructor(tipoEntrada,marca,  ){
        super(tipoEntrada,marca )
        this._idRaton =  ++ Raton.contadorRatones

    }


    get idRaton(){
        return this._idRaton;
    }

    toString(){
        return ` Raton: [idRaton: ${this._idRaton}, tipoEntrada: ${ this._tipoEntrada}, marca: ${this._marca} ]`
    }
}


class Teclado extends DispositivoEntrada{

    static contadorTeclados = 0;

    constructor(tipoEntrada,marca,  ){
        super(tipoEntrada,marca )
        this._idTeclado =  ++ Teclado.contadorTeclados

    }


    get idTeclado(){
        return this._idTeclado;
    }

    toString(){
        return `Teclado : [idTeclado: ${this._idTeclado}, tipoEntrada: ${ this._tipoEntrada}, marca: ${this._marca} ]`
    }
    
}

class Monitor {
    static contadorMonitores = 0;

    constructor(marca, tamanio){
        this._idMonitor = ++ Monitor.contadorMonitores;
        this._marca = marca;
        this._tamanio = tamanio;
    }

    get idMonitor(){
        return this._idMonitor;   
    }

    get marca(){
        return this._marca;
    }

    set marca(marca){
        this._marca = marca
    }

    get tamanio(){
        return this._tamanio;
    }

    set tamanio(tamanio){
        this._tamanio = tamanio
    }

    toString(){
        return `Monitor : [idMonitor: ${this._idMonitor}, marca: ${ this._marca}, tamanio: ${this._tamanio} ]`
    }

}


let raton1 = new Raton ('USB', 'HP');
console.log( raton1.toString());
let raton2 = new Raton ('Bueltooth', 'Dell');
console.log( raton2.toString());

let teclado1 = new Teclado ('USB', 'Genius');
console.log( teclado1.toString());
let teclado2 = new Teclado ('Bueltooth', 'Alienware');
console.log( teclado2.toString());

let monitor1 = new Monitor ('LG', '17');
console.log( monitor1.toString());
let monitor2 = new Monitor ('MSI', '21');
console.log( monitor2.toString());