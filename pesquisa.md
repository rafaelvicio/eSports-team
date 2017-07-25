# Plataforma de Gerenciamento para Times de Esportes Eletronicos

## Justificativa

Atualmente as organizações de esporte eletrônico não dispõem de qualquer ferramenta especializadas para o gerenciamento do seu negócio, muitas utilizam-se de ferramentas genéricas como planilhas e documentos para fazer o seu planejamento. Um software especializado em um negócio específico pode garantir benefícios, como também contribuir para o aumento de produtividade

## Objetivos

O seguinte trabalho possui como os seguintes objetivos gerais e especificos para obter sucesso em sua realização.

## Objetivos Gerais

Desenvolver uma plataforma web que tem como objetivo principal contribuir com o desenvolvimento das equipes de esporte eltrônico atravez de uma aplicação web que vai fornecer funcionalidades como gerenciamento da equipe, cronograma de treinos, calendario de eventos e demais funcionalidades basicas.

* Apresentar um sistema que contribua com o desenvolvimento de equipes de esportes eletronicos. Esse sistema deve auxiliar os times a organizar seus compromissoes e objetivos.

## Objetivos Especificos

* Desenvolver um sistema que ajuda a controlar as informações dos usuários
* Criar uma funcionalidade que ajude na organização da agenda dos integrantes do time

# MEAN

O termo MEAN é um acrônimo que representa quatro tecnologias: MongoDB um banco não relacional orientado a documentos, Express um framework de rotas, AngularJS como framework front-end o NodeJS como plataforma para execução de código JavaScript no brack-end. O termo foi cunhado em 2013 por Valeri Karpov do time do MongoDB após a sua participação em um Hackathon onde utilizou essa Stack de tecnologias.[1]

# MongoDB

O MongoDB é um banco de dados NoSQL de falta performance que possue código aberto, orientado a documentos caracterizado como schema-free e escrito em C++. Os dados são persistidos em coleções de dados que são representados usando o BSON.(MONGODB, 2017) O BSON é um formato de representação de documentos muito similar ao JSON. Suportanto todos os formatos encontrados no JSON como String, Inteiros, boleano e tambem tipos de dados como data, binary data, regular expression e code.(BSON, 2017)

![MongoDB](https://camo.githubusercontent.com/31a4e87fbafdb1440d4739da686b04eaf571d2ad/68747470733a2f2f7765626173736574732e6d6f6e676f64622e636f6d2f5f636f6d5f6173736574732f636d732f4d6f6e676f44422d4c6f676f2d356333613734303561383536373533363662656233613565633463303332333438633339306233663134326635653664646466316437386532646635636235632e706e67)

## Orientado a Documentos

Banco de dados orientados a documentos armazenam os dados em formato chave-valor em uma estrutura de dados chamada documentos, essas dados são armazenados no formato JSON(JavaScript Object Notation), padrão que visa uma fácil legibilidade e independência da linguagem.[2]

![Documento](https://camo.githubusercontent.com/f7e11c23acf5a88b35a4b0a00931b5802c323c5c/68747470733a2f2f646f63732e6d6f6e676f64622e636f6d2f76332e322f5f696d616765732f646174612d6d6f64656c2d64656e6f726d616c697a65642e706e67)

# Express

# Angular

# NodeJS

NodeJS é uma plataforma para execução de código JavaScript no servidor desenvolvida com base na V8, a engine de JavaScript do navegador Google Chrome. O NodeJS utiliza-se do paradigma de programação orientada a eventos e realiza requisições I/O não bloqueante. O que o torna uma plataforma muito leve e eficiente (NODE.JS, 2013).

## V8

V8 é o motor de JavaScript com alto desempenho de código aberto do Google, escrito em C++ e usado no Chromium, NodeJS e várias outras aplicações. V8 implementa o ECMAScript conforme especificação no ECMA-262.(CHROME V8, 2017)

![V8](https://camo.githubusercontent.com/2f07565f6b6ba118e8c3a7e712e9f42fb5c6972d/68747470733a2f2f646576656c6f706572732e676f6f676c652e636f6d2f76382f696d616765732f6c6f676f5f76385f31393270785f636c722e706e67)

A plataforma NodeJS foi criado por Ryan Dahl com a ajuda de 14 colaboradores em 2009. A plataforma aplica o conteido de requisições não bloqueantes que apresentam ótima performance porque utiliza todos os recursos do processadores e com baixo uso de memória.

## Single-Thread

O NodeJS implementa um gerenciador de eventos Single-Threads permitindo a realização das operações I/O não bloqueante.(THE NODE.JS EVENT LOOP, 2017). Esse gerenciador chamado de Event Loop é responsavel por delegar as operações ás suas respectivas Threads do Thread Pool. Essa operação é registrada no Event Queue onde ficam armazenada todas as operações que estão sendo realizadas, posteriormente quando alguma operação do Event Loop e finalizada, o NodeJS retorna para a operação que foi registada no Event Queue e da continuidade aos processos dessa operação. Esse comportamento é o que torna o NodeJS Non-blocking I/O.

![Event Loop](https://camo.githubusercontent.com/5e4b83d2bf7c1524bfc940fccb221dcca8fbf88b/68747470733a2f2f63646e2d696d616765732d312e6d656469756d2e636f6d2f6d61782f3830302f312a53386a667159514e6b4d757957456b5f356c784759512e6a706567)

Com todas essas características que tornam o NodeJS uma plataforma excelente para o desenvolvimento de aplicações, em especial a realização de eventos I/O não bloqueantes a plataforma hoje em dia e utilizada por grandes empresas como IBM, Intel, Microsoft,PayPal, SAP e Netflix.

![Empresas](https://camo.githubusercontent.com/c544eb432077161882e1ba3986af85dabbb844c0/68747470733a2f2f63646e2d696d616765732d312e6d656469756d2e636f6d2f6d61782f3830302f312a513276764543496943786f5f2d7639355233652d6c512e706e67)

# Referencias

[1]: Valeri Karpov. The mean stack: Mongodb, expressjs, angularjs and node.js. 2013. [2] “Introducing JSON”. http://json.org/. Acessado em 14/05/2010.

NODEJS. Evented I/O for V8 JavaScript 2013. Disponível em < http://nodejs.org/>. Acesso em: 19 jun. 2017. CHROME V8. Disponível em https://developers.google.com/v8/. Acesso em: 22 jun. 2017. THE NODE.JS EVENT LOOP. Disponível em https://nodejs.org/en/docs/guides/event-loop-timers-and-nexttick/. Acesso em: 22 jun. 2017

BATISTA, F. et al. MongoDB: Banco de dados orientado a documento. 2012.Disponível em: http://MongoDB.machinario.com/ MONGODB. Disponível em https://www.mongodb.com/ BSON. Binary JSON. Disponível em http://bsonspec.org/

NodeJS Paypal: https://www.paypal-engineering.com/2013/11/22/node-js-at-paypal/