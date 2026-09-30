import IEclss, { IEfunc, IEjson } from './IE.mjs';

const agora = new Date();

const ieC = new IEclss();

ieC.setNumero('111');
ieC.setEstado('SP');
ieC.setDataRegistro(agora);

console.log(`(Classe) Número: ${ieC.getNumero()}`);
console.log(`(Classe) Estado: ${ieC.getEstado()}`);
console.log(`(Classe) Data: ${ieC.getDataRegistro().toLocaleString('pt-BR')}`);
console.log('');

const ieF = IEfunc();

ieF.setNumero('222');
ieF.setEstado('RJ');
ieF.setDataRegistro(agora);

console.log(`(Factory) Número: ${ieF.getNumero()}`);
console.log(`(Factory) Estado: ${ieF.getEstado()}`);
console.log(`(Factory) Data: ${ieF.getDataRegistro().toLocaleString('pt-BR')}`);
console.log('');

IEjson.setNumero('333');
IEjson.setEstado('MG');
IEjson.setDataRegistro(agora);

console.log(`(Objeto Literal) Número: ${IEjson.getNumero()}`);
console.log(`(Objeto Literal) Estado: ${IEjson.getEstado()}`);
console.log(`(Objeto Literal) Data: ${IEjson.getDataRegistro().toLocaleString('pt-BR')}`);
console.log('');

console.log(
    `Resumo → Classe: ${ieC.getNumero()}-${ieC.getEstado()} | ` +
    `Factory: ${ieF.getNumero()}-${ieF.getEstado()} | ` +
    `Objeto Literal: ${IEjson.getNumero()}-${IEjson.getEstado()}`
);