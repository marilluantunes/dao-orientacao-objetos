import Endereco from './Endereco.mjs';

async function usaEndereco() {
    const end = new Endereco();

    try {
        await end.setCep("72015565");

        console.log("✅ Endereço carregado com sucesso:");
        console.log("CEP:", end.getCep());
        console.log("Logradouro:", end.getLogradouro());
        console.log("Bairro:", end.getBairro());
        console.log("Cidade:", end.getCidade());
        console.log("UF:", end.getUf());

    } catch (erro) {
        console.error("❌ Erro ao definir CEP:", erro.message);
    }
}

usaEndereco();