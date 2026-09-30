import Aluno from './pessoas/Aluno.js';
import AlunoDAO from './pessoas/DAOs/AlunoDAO.mjs';
import Endereco from './pessoas/Endereco.js';
import Telefone from './pessoas/Telefone.js';

const aluno = new Aluno();

aluno.setNome('Carlos');
aluno.setEmail('carlos@ifb.edu.br');
aluno.setMatricula('202401');

const end = new Endereco();

end.setLogradouro('QNM 40');
end.setCep('12345-678');

aluno.setEndereco(end);

const fone1 = new Telefone();

fone1.setDdd('61');
fone1.setNumero('99999-8888');

aluno.addTelefone(fone1);

const alunoDAO = new AlunoDAO(aluno);

const dados = alunoDAO.toJSON();

alunoDAO.saveJSON();

console.log(dados);
console.log(JSON.stringify(dados));
console.log(alunoDAO.recoveryJSON());