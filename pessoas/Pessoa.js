// Arquivo: /pessoas/Pessoa.js
// Classe base para PF e PJ. Fornece atributos comuns (nome, email)
// e também endereço e coleção de telefones.

const Endereco = require('./Endereco');
const Telefone = require('./Telefone');

class Pessoa {

    #nome;
    #email;
    #endereco;
    #telefones = [];

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

    setEndereco(endereco) {
        if (endereco instanceof Endereco) {
            this.#endereco = endereco;
            return true;
        } else {
            return false;
        }
    }

    getEndereco() {
        return this.#endereco;
    }

    addTelefone(telefone) {
        if (telefone instanceof Telefone) {
            this.#telefones.push(telefone);
            return true;
        } else {
            return false;
        }
    }

    getTelefones() {
        return this.#telefones;
    }
}

module.exports = Pessoa;