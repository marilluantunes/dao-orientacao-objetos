# Atividade – DAO com Node.js

Repositório com os códigos de exemplo vistos em sala e as classes DAO
desenvolvidas para Pessoa Física (PF) e Aluno, seguindo o padrão do PJDAO.

##  Estrutura

```
atividade-dao/
├── pessoas/
│   ├── Pessoa.js
│   ├── PF.js
│   ├── PJ.js
│   ├── Aluno.js
│   ├── Telefone.js
│   ├── Endereco.js
│   ├── IE/
│   │   └── IEclss.js
│   ├── ENDERECO/
│   │   ├── Endereco.mjs
│   │   └── usaEndereco.mjs
│   └── DAOs/
│       ├── localStorage.mjs
│       ├── PJDAO.mjs
│       ├── PFDAO.mjs
│       └── AlunoDAO.mjs
├── IE.mjs
├── usaIE.mjs
├── usaPJDAO.mjs
├── usaPFDAO.mjs
└── usaAlunoDAO.mjs
```

## Sobre as DAOs

As três DAOs (`PJDAO`, `PFDAO`, `AlunoDAO`) seguem o **mesmo padrão**:

- Recebem o objeto no construtor e validam com `instanceof`.
- Oferecem três métodos: `toJSON()`, `saveJSON()` e `recoveryJSON()`.
- Utilizam a **simulação de `localStorage`** (`localStorage.mjs`) como
  mecanismo de armazenamento em memória.
- Cada DAO utiliza uma **chave diferente** no localStorage:
  - `'pj'` para PJDAO
  - `'pf'` para PFDAO
  - `'aluno'` para AlunoDAO

## Como executar

```bash
node usaIE.mjs
node pessoas/ENDERECO/usaEndereco.mjs
node usaPJDAO.mjs
node usaPFDAO.mjs
node usaAlunoDAO.mjs
```
