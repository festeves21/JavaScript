class DispositivoEntrada{
    
    static contadorOrdenes = 0;

    constructor(tipoEntrada,marca){
        this._tipoEntrada = tipoEntrada;
        this._marca = marca;
    }


    get tipoEntrada(){
        return this._tipoEntrada;
    }

    get marca(){
        return this._marca;
    }

    
}