import axios from "axios";

export const buscarLivros = ()  => {
    return axios.get("https://fakerapi.it/api/v2/books?_locale=pt_BR&_quantity=10")
        .then(response => response.data);
}