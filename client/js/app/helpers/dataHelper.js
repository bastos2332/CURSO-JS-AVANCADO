class DataHelper {
    ConvertTextToDate(texto) {
       return new Date(
            ...texto.split('-')
            .map((item, indice) => item - (indice % 2)));
    }

    ConvertDateToText(data) {
        return (data.getDate() + '/' + (data.getMonth() + 1) + '/' + data.getFullYear());
    }
}