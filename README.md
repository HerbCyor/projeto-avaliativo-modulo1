# OpenNature (Natureza365)
Sesc Senai LAB365 - FuturoDEV Nature

Projeto Avaliativo Modulo 1

autor: Herbert Martins Cardozo

## Sobre
O OpenNature (Natureza365) é uma plataforma web para o registro de áreas de interesse de amantes do meio ambiente. Usuários podem cadastrar informações sobre pontos de interesse como áreas naturais, trilhas, parques ecológicos e reservas ambientais. 

A plataforma permite o cadastramento de novos usuários. Usuários podem cadastrar, editar e deletar pontos de interesse, assim como visualizar informações do local, com obtenção de link para o google maps.

## Motivação

É extramente comum encontrarmos pessoas dependentes da tecnologia no seu dia a dia. Estamos conectador com a internet praticamente 100% do nosso tempo, seja para trabalho ou lazer. Esse contato excessivo com a tecnologia pode, por muitas vezes, nos levar a problemas de saúde, tanto física quanto mental. Sabe-se que o contato com a natureza trás benecificios para a nossa saúde, ao mesmo tempo que passar um tempo desconectado da tecnologia pode promover uma conexão maior com a natureza à nossa volta. Porém, mesmo com a motivação de buscar um lugar para aprecisar a paisagem, muitas pessoas podem não ter o conhecimento do melhor lugar perto delas, assim como não saber onde procurar por informações pertinentes às suas vontades e necessidades. Para isso o Open Nature busca oferecer uma plataforma de registro e busca de locais da natureza perto da pessoa, contendo informações importantes sobre os mesmos, para que as pessoas tenham um acesso mais fácil e assim, poderem cuidar melhor de sua saúde.

## Objetivo
O objetivo deste projeto é entregar um MPV (minimum viable product) da aplicação BackEnd, contendo uma API RESTful utilizando Node e Express, além de conexão com banco de dados relacional PostgreSQL utilizando a biblioteca Sequelize.


## Configuração do Ambiente

### Bibliotecas utilizadas
- node.js
- express 
- sequelize 
- jsonwebtoken
- bcryptjs
- swagger-autogen
- swagger-ui-express
- axios

### Primeiros passos
- ```git clone https://github.com/HerbCyor/projeto-avaliativo-modulo1.git``` 
- ```npm install```
- criar .env com as variáveis de ambiente 
- ```npx sequelize-cli db:migrate```
- ```npx sequelize-cli db:seed:all```

### Inicializando o servidor
- ```npm run start:dev```

### Testando a aplicação

- localhost:port/docs (swagger)

## Informações do Applicativo

### Usuário básico de testes
- email: johndoe@mail.com
- senha: password123

### Rotas
- /login  [ POST ]
- /usuario [ POST ]
- /local [ GET, POST ]
- /local/local_id [ GET, POST, PUT, DELETE ]
- /local/local_id/maps [ GET ]
- /docs [ GET ]

### Modelos
- ### User
    modelo de usuario
    - nome completo
    - sexo
    - cpf
    - data de nascimento
    - e-mail
    - senha

- ### PointOfInterest
    modelo de ponto de interesse/área natural
    - nome
    - descrição

- ### UserAddress
    modelo de endereço de usuários
    - rua
    - numero
    - complemento
    - bairro
    - cidade
    - estado
    - país
    - cep
    - userId
- ### PointOfInterestAddress
    modelo de endereço de Pontos de Interesse
    - rua
    - numero
    - complemento
    - bairro
    - cidade
    - estado
    - país
    - cep
    - pointOfInterestId
- ### PointOfInterestGeolocation
    modelo de geolocalização de Pontos de Interesse
    - latitude
    - longitude
    - pointOfInterestAddressId

## Design Database
 ![something](https://i.ibb.co/x2SR89N/datadabase-Open-Nature-drawio.png)

## Estrutura do Aplicativo
```
📦.
 📦src
 ┣ 📂config
 ┃ ┗ 📜database.config.js
 ┣ 📂controllers
 ┃ ┣ 📜LoginController.js
 ┃ ┣ 📜PointOfInterestController.js
 ┃ ┗ 📜UserController.js
 ┣ 📂database
 ┃ ┣ 📂migrations
 ┃ ┃ ┣ 📜20240504003521-create_table_users.js
 ┃ ┃ ┣ 📜20240504003556-create_table_user_address.js
 ┃ ┃ ┣ 📜20240504003621-create_table_points_of_interest.js
 ┃ ┃ ┣ 📜20240504003655-create_table_points_of_interest_address.js
 ┃ ┃ ┗ 📜20240504003743-create_table_points_of_interest_geolocation.js
 ┃ ┣ 📂seeders
 ┃ ┃ ┗ 📜20240501230047-demo-user.js
 ┃ ┗ 📜connection.js
 ┣ 📂middlewares
 ┃ ┣ 📜auth.js
 ┃ ┣ 📜ValidatePointOfInterestData.js
 ┃ ┣ 📜validatePointOfInterestOwnership.js
 ┃ ┣ 📜validatePointOfInterestUpdate.js
 ┃ ┗ 📜ValidateSignUp.js
 ┣ 📂models
 ┃ ┣ 📜PointOfInterest.js
 ┃ ┣ 📜PointOfInterestAddress.js
 ┃ ┣ 📜PointOfInterestGeolocation.js
 ┃ ┣ 📜User.js
 ┃ ┗ 📜UserAddress.js
 ┣ 📂routes
 ┃ ┣ 📜login.route.js
 ┃ ┣ 📜pointofinterest.route.js
 ┃ ┣ 📜routes.js
 ┃ ┗ 📜user.route.js
 ┣ 📂utils
 ┃ ┣ 📜googlemaps.js
 ┃ ┣ 📜openstreetmap.js
 ┃ ┗ 📜utils.js
 ┣ 📜index.js
 ┣ 📜server.js
 ┃
 ┣ 📜package.json
 ┣ 📜package-lock.json
 ┣ 📜README.md
 ┣ 📜LICENSE
 ┣ 📜.gitignore
 ┣ 📜swagger-output.json
 ┣ 📜swagger.js
 ┣ 📜.sequelizerc
 ┗ 📜.env
 
 ```
## Melhorias Futuras
- interface de usuário (FrontEnd)
- multiplas escolhas para sexo
- validação cpf na database
- database com cidades do brasil
- integração com rotas para fácil acesso pelas pessoas
- favoritos
- maior abrangência de informações sobre os locais
- comentários e avaliações

## Video da apresentação
![video](https://drive.google.com/file/d/1I-AEGhsLZNOUIDeu-BRkBCGvOiBNDTDM/view?usp=sharing)