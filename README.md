# Cypress E2E Testing Project

Este projeto contém testes end-to-end (E2E) automatizados para uma aplicação web usando Cypress. Os testes cobrem funcionalidades essenciais como cadastro de usuários, login, compras e logout.

## 📋 Estrutura do Projeto

```
cypress/
├── e2e/
│   ├── Cadastro.cy.js      # Testes de cadastro de usuários
│   ├── Login.cy.js         # Testes de autenticação
│   ├── Compras.cy.js       # Testes de fluxo de compras
│   └── logout.cy.js        # Testes de logout
├── fixtures/
│   └── example.json        # Dados de teste estáticos
├── support/
│   ├── commands.js         # Comandos customizados do Cypress
│   └── e2e.js             # Configurações de suporte E2E
└── downloads/             # Arquivos baixados durante testes

cypress.config.js          # Configuração principal do Cypress
package.json              # Dependências e scripts do projeto
```

## 🛠️ Tecnologias Utilizadas

- **Cypress 14.0.0** - Framework de testes E2E
- **JavaScript** - Linguagem de programação
- **Node.js** - Ambiente de execução
- **Faker.js** - Geração de dados de teste
- **Allure** - Relatórios de teste

## 📦 Instalação

1. Clone o repositório:
```bash
git clone <url-do-repositorio>
cd cypress
```

2. Instale as dependências:
```bash
npm install
```

## ▶️ Executando os Testes

### Modo Interativo (Interface Gráfica)
```bash
npx cypress open
```

### Modo Headless (Linha de Comando)
```bash
npm run cy:run
```

### Executar Teste Específico
```bash
npx cypress run --spec "cypress/e2e/Cadastro.cy.js"
```

### Com Relatórios Allure
```bash
npm run cy:run        # Executa testes
npm run report:allure # Gera relatório
```

## 📊 Relatórios

O projeto gera relatórios de teste usando Allure:

- Relatórios salvos em `allure-report/`
- Resultados brutos em `allure-results/`

Para visualizar relatórios:
```bash
npm run report:allure
```


##  Suporte

Para dúvidas ou problemas:
- Abra uma issue no GitHub
- Consulte a documentação do Cypress
- Verifique os logs de erro nos relatórios

---