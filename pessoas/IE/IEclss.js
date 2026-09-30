class IE {

    #numero;
    #estado;
    #dataRegistro;
    #pj;

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

    setEstado(estado) {
        if (estado) {
            this.#estado = estado;
            return true;
        } else {
            return false;
        }
    }

    getEstado() {
        return this.#estado;
    }

    setDataRegistro(dataRegistro) {
        if (dataRegistro instanceof Date) {
            this.#dataRegistro = dataRegistro;
            return true;
        } else {
            return false;
        }
    }

    getDataRegistro() {
        return this.#dataRegistro;
    }

    setPJ(pj) {
        if (pj) {
            this.#pj = pj;
            return true;
        } else {
            return false;
        }
    }

    getPJ() {
        return this.#pj;
    }
}

module.exports = IE;