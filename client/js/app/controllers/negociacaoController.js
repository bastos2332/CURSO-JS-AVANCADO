class NegociacaoController {
constructor() {
    let $ = document.querySelector.bind(document);
    this.data = $('#data');
    this.quantidade = $('#quantidade');
    this.valor = $('#valor');
}

    adiciona(event) {
        event.preventDefault();
        
        let negociacao = new Negociacao(this.data, this.quantidade, this.valor);
        
    }
}