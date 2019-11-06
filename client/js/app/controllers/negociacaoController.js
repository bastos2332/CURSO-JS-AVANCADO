class NegociacaoController {
constructor() {
    let $ = document.querySelector.bind(document);
    this.data = $('#data');
    this.quantidade = $('#quantidade');
    this.valor = $('#valor');
}

    adiciona(event) {
        event.preventDefault();
        let helper = new DataHelper();

        let negociacao = new Negociacao(
            helper.ConvertTextToDate(this.data.value), 
            this.quantidade, 
            this.valor);
        console.log(helper.ConvertDateToText(negociacao.data));


    }
}