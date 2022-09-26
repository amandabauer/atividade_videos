class DateConverter {
constructor(){
    throw new Error('Essa classe nao pode ser instanciada');
}

static paraTexto(data){
    //return data.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear();
    return `${data.getDate()}/${data.getMonth() + 1}/${data.getFullYear()}`;
}

static paraData(texto){
    if (!/^\d{4}-\d{2}$/.test(texto)) throw new Error('Deve estar no formato aaaa-mm-dd');
    return new Date(...texto.split('-').map((item, indice) => item - (indice % 2)));
}
}