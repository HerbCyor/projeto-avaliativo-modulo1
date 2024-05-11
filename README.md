# Natureza365
Sesc Senai LAB365 - FuturoDEV Nature

Projeto Avaliativo Modulo 1

autor: Herbert Martins Cardozo

## Sobre
O Natureza365 é uma plataforma web para o registro de áreas de interesse de amantes do meio ambiente. Usuários podem cadastrar informações sobre pontos de interesse como áreas naturais, trilhas, parques ecológicos e reservas ambientais. 

A plataforma permite o cadastramento de novos usuários. Usuários podem cadastrar, editar e deletar pontos de interesse, assim como visualizar informações do local, com obtenção de link para o google maps.


## Objetivo
O objetivo deste projeto é entregar um MPV (minimum viable product) da aplicação BackEnd, contendo uma API RESTful utilizando Node e Express, além de conexão com banco de dados relacional PostgreSQL utilizando a biblioteca Sequelize.

## Configuração do Ambiente

### Bibliotecas utilizadas
- node 
- express 
- sequelize 
- jsonwebtoken
- bcryptjs
- swagger-autogen
- swagger-ui-express
- axios

### Primeiros passos
- git clone 
- npm install
- criar .env com as variáveis de ambiente 
- ```npx sequelize-cli db:migrate```
- ```npx sequelize-cli db:seed:all```

### Inicializando o servidor
- npx run start:dev

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
    - endereço 
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
    - bairro
    - cidade
    - estado
    - país
    - cep
- ### PoIAddress
    modelo de endereço de Pontos de Interesse
    - rua
    - numero
    - bairro
    - cidade
    - estado
    - país
    - cep
- ### PoIGeolocation
    modelo de geolocalização de Pontos de Interesse
    - latitude
    - longitude

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
- multiplas escolhas para sexo
- validação cpf na database
- database com cidades do brasil

 ## Links Externos
 - video de apresentação