class Negociacao {
    constructor(data, quantidade, valor){
        this._data = data;
        this._quantidade = quantidade;
        this._valor = valor;
    }

    obterVolume (){
        return this._quantidade * this._valor;
    }

    get data(){
        return this._data;
    }
    get quantidade(){
        return this.quantidade;
    }
    get valor(){
        return this.valor;
    }

}