// Arquivo: /pessoas/PF.js
// Classe Pessoa Física: herda de Pessoa e adiciona o atributo privado #cpf.

const Pessoa = require('./Pessoa');

class PF extends Pessoa {

    #cpf;

    setCPF(cpf) {
        if (cpf) {
            if (cpf.length < 12) {
                return false;
            }
            this.#cpf = cpf;
            return true;
        } else {
            return false;
        }
    }

    getCPF() {
        return this.#cpf;
    }
}

module.exports = PF;