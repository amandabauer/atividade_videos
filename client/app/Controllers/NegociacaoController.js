class NegociacaoController{

    constructor(){

        let $ = document.querySelector.bind(document);
            
        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');
        //const self = this;
        this._negociacoes = new Negociacoes(model => this._negociacoesView.update(model));
        this._negociacoesView = new NegociacoesView('#negociacoes');
        this._negociacoesView.update(this._negociacoes);
        this._mensagem = new Mensagem();
        this._mensagemView = new MensagemView('#mensagemView');
        this.mensagemView.update(this._mensagem);
    }

    adiciona(event) {
        event.preventDefault();
        this._negociacoes.adiciona(this._criaNegociacao);
        this._mensagem.texto = 'Negociacao adicionada!';
        this._mensagemView.update(this._mensagem);
        this._limparFormulario();
    }

    _limparFormulario(){
        this._inputData = "2021-01-01";
        this._inputQuantidade.value = 1;
        this._inputValor.value = 2.0;
        this._inputData.focus();
    }

    _criaNegociacao(){
        return new Negociacao(
            DateConverter.paraData(this._inputData.value),
            parseInt(this._inputQuantidade.value),
            parseFloat(this._inputValor,value)
        );
    }

    apaga(){
        this._negociacoes.esvazia();
        this._mensagem.texto = "Negociacao apagada com sucesso!";
        this._mensagemView.update(this.mensagem);
    }
}