// Arquivo: /pessoas/Telefone.js
// Representa um telefone com DDD e número, com encapsulamento.

class Telefone {

    #ddd;
    #numero;

    setDdd(ddd) {
        if (ddd) {
            this.#ddd = ddd;
            return true;
        } else {
            return false;
        }
    }

    getDdd() {
        return this.#ddd;
    }

    setNumero(numero) {
        if (numero) {
            this.#numero = numero;
            return true;
        } else {
            return false;
        }
    }

    getNumero() {
        return this.#numero;
    }
}

module.exports = Telefone;