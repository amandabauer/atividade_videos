class Negociacao {
    constructor(data, quantidade, valor){

        Object.assign(this, {_quantidade, _valor});
        this._data = new Date(_data.getTime());
       // this._data = new Date (data.getTime());
        //this._quantidade = quantidade;
        //this._valor = valor;
        Object.freeze(this);
    }

    obterVolume (){
        return this._quantidade * this._valor;
    }

    get data(){
      // return this._data;
      return new Date(this._data.getTime());
    }
    get quantidade(){
        return this.quantidade;
    }
    get valor(){
        return this.valor;
    }

}