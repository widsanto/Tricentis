# Automação de  Testes

Projeto:  Laudo 3.0 Front-End <br>
Informações básicas realizar a instalação das tecnologias e configurações para automatizar os testes do sistema Laudo 3.0.

**Sistema de QA**: [Laudo 3.0](#https://nodejs.org/en/download/)

**Atenção**: Para acessar o sistema você precisa ter solicitado as credencias no ambiente da DASA. 

# Configuração  para utilizar o cypress

+ [NodeJE](#https://nodejs.org/en/download/)
+ [Cypress](#https://docs.cypress.io/guides/getting-started/installing-cypress#System-requirements)
+ [cucumber-preprocessor](#https://www.npmjs.com/package/cypress-cucumber-preprocessor)


# Instalação do Gerenciado de Pacotes NodeJS <br>

<h3>Para instalar o NodeJs acesse o site oficial, click em Download(Versão LTS é a mais estável). Após a finalização do download clique em "Executar". 
<br>

<p>1- Todas as opções de Custom Setup devem estar habilitadas. <br>  
  1. Node.JS runtime<br>
  2. npm packege manager<br>
  3. Online documentation shortcuts<br>
  4. Add to PATH<br><p/>
<br>
# Instalação do Cypress<br>

Abra o visual code no Terminal e insira o comando  e tecle enter para instalação...<br>

```
npm install cypress --save-dev
```
<br>

<h3>  Atualização do Cypress <br>

Rodar o report
1 - npm run cy:rodar
2 - npm run cy:report (pegar o arquivo index.html e jogar no chrome )

Rodar testes por Tags
npx cypress run -e TAGS='@yourTag' 

# Estruturação de Arquitetura

# Regras de Organização
Feature sempre dentro da pasta Integration
PageObjects dentro da pasta Support

#Versão 1.0 