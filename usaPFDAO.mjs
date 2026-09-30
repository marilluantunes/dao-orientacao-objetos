import PF from './pessoas/PF.js';
import PFDAO from './pessoas/DAOs/PFDAO.mjs';
import Endereco from './pessoas/Endereco.js';
import Telefone from './pessoas/Telefone.js';

const pf = new PF();

pf.setNome('Maria');
pf.setEmail('maria@ifb.edu.br');
pf.setCPF('123456789-10');

const end = new Endereco();

end.setLogradouro('QNM 40');
end.setCep('12345-678');

pf.setEndereco(end);

const fone1 = new Telefone();

fone1.setDdd('61');
fone1.setNumero('99999-8888');

pf.addTelefone(fone1);

const fone2 = new Telefone();

fone2.setDdd('62');
fone2.setNumero('99999-7777');

pf.addTelefone(fone2);

const pfdao = new PFDAO(pf);

const dados = pfdao.toJSON();

pfdao.saveJSON();

console.log(dados);
console.log(JSON.stringify(dados));
console.log(pfdao.recoveryJSON());