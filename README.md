<h1>API Carteira de Criptomoedas</h1>

> Status: Developing ⚠️

### API REST que funciona como uma carteira de criptomoedas, adicionando, lendo, atualizando e deletando dados.

## Tecnologias e Ferramentas

* Nodejs
* JavaScript
* MySQL
* Postman
* VSCode

## Como rodar a aplicação

1. Utilizando o Git, clone o repositório na sua máquina com o comando: git clone https://github.com/adson-SO/api-carteira-criptomoedas.git
2. Acesse a pasta do projeto pelo terminal com o comando: cd api-carteira-criptomoedas
3. Para instalar os pacotes necessários para rodar a aplicação use o comando: npm install
4. Na pasta do projeto, dentro da pasta config, existe o arquivo config.json, nele, passe as informações do seu banco de dados 
5. Execute os comandos npx sequelize-cli db:migrate e npx sequelize-cli db:seed:all para criar as tabelas no seu banco e populá-lo, respectivamente.
6. Para executar a aplicação use o comando: npm start
7. Utilize o Postman para consumir as rotas da aplicação

## Rotas 

* GET - http://localhost:3000/api/v1/wallet
* POST - http://localhost:3000/api/v1/wallet
* GET - http://localhost:3000/api/v1/wallet/:address
* PUT - http://localhost:3000/api/v1/wallet/:address
* DELETE - http://localhost:3000/api/v1/wallet/:address
* GET - http://localhost:3000/api/v1/wallet/:address/transaction

## Agradecimentos

* Felipe da Silva
* Bruna Santos
* Gabriel Missio
* Thais Nicodemus
* Diego Bueno
* Giovanni HoffMann

