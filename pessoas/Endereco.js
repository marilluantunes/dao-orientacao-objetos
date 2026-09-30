// Arquivo: /pessoas/Endereco.js

class Endereco {

    #logradouro;
    #cep;

    setLogradouro(logradouro) {
        if (logradouro) {
            this.#logradouro = logradouro;
            return true;
        } else {
            return false;
        }
    }

    getLogradouro() {
        return this.#logradouro;
    }

    setCep(cep) {
        if (cep) {
            this.#cep = cep;
            return true;
        } else {
            return false;
        }
    }

    getCep() {
        return this.#cep;
    }
}

module.exports = Endereco;