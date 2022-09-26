class View {
    constrcutor(selector){
        this._elemento = documento.querySelector(selector);
    }
    update(model){
        this._elementor.innerHTML = this.template(model);
    }

    template(model){
        throw new Error('Voce precisa implementar o metodo template');
    }
}