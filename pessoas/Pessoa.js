// Arquivo: /pessoas/Pessoa.js
// Classe base para PF e PJ. Fornece atributos comuns (nome, email)
// com encapsulamento via atributos privados.

class Pessoa {

    #nome;
    #email;

    setNome(nome) {
        if (nome !== '' && nome) {
            this.#nome = nome;
            return true;
        } else {
            return false;
        }
    }

    getNome() {
        return this.#nome;
    }

    setEmail(email) {
        if (email !== '' && email) {
            this.#email = email;
            return true;
        } else {
            return false;
        }
    }

    getEmail() {
        return this.#email;
    }
}

module.exports = Pessoa;