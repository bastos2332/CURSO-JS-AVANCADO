class NegociacaoController {
constructor() {
    let $ = document.querySelector.bind(document);
    this.data = $('#data');
    this.quantidade = $('#quantidade');
    this.valor = $('#valor');
}

    adiciona(event) {
        event.preventDefault();
        
    
        let data = new Date(
            ...this.data.value.split('-')
            .map((item, indice) => item - (indice % 2)));
        let negociacao = new Negociacao(data, this.quantidade, this.valor);
        console.log(negociacao.data);


    }
}