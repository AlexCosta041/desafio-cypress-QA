# 🧪 Boas Práticas– Automação com Cypress

Projeto de automação de testes desenvolvido com **Cypress**.  
O foco foi a simulação de **compras em e-commerce**, uma área sensível que requer revisões e monitoramento constantes.

Devido à instabilidade do site original do desafio, os testes foram executados em:  
👉 (https://www.automationexercise.com)

---

## 📋 Pré-requisitos

Antes de rodar o projeto, instale:

1. **Node.js** (versão LTS 18 ou superior)  
   🔗 [https://nodejs.org/en/download](https://nodejs.org/en/download)

   Verifique se está instalado:
   ```bash
   node -v
   npm -v
   ```

2. **Yarn** – gerenciador de pacotes  
   ```bash
   npm install    ```

3. **Visual Studio Code**  
   🔗 [https://code.visualstudio.com/download](https://code.visualstudio.com/download)

   Extensões sugeridas:
   - 🌱 Cypress Snippets  
   - 💡 ESLint  
   - 🧩 Prettier

---

## ⚙️ Instalação do Projeto

1. Clone o repositório:
   ```bash
   git clone https://github.com/AlexCosta041/desafio-cypress-QA.git
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

---

## 🚀 Execução dos Testes

### 🔹 Modo interativo (com interface):
```bash
 npx cypress open
```


---

## 🧩 Estrutura do Projeto

```
boas-praticas/
├── cypress/
│   ├── e2e/
│   │   └── compras.cy.js         # Cenários de teste do fluxo de compras
│   ├── fixtures/                 # Massa de dados (usuários, produtos etc.)
│   ├── support/
│   │   ├── commands.js           # Comandos customizados
│   │   └── e2e.js                # Configurações globais
├── package.json                  # Configuração do projeto
├── cypress.config.js             # Configurações do Cypress
└── README.md                     # Este arquivo
```

---

## 🧠 Tecnologias e Dependências

- [Cypress ^12.8.1](https://www.cypress.io/) – Framework principal de automação  
- [@faker-js/faker ^7.6.0](https://fakerjs.dev/) – Geração de dados aleatórios  
- **Yarn** – Gerenciador de dependências  
- **Mocha / Chai** – Frameworks nativos de assertions do Cypress  

---

## 🛒 Site Utilizado

**URL Base:** [https://www.automationexercise.com](https://www.automationexercise.com)

> Este site foi utilizado por ser um ambiente estável para automação de testes de e-commerce, cobrindo fluxos de **cadastro, login, busca e compra de produtos**.

---

## 📄 Licença
  
Desenvolvido por **Alex** .
