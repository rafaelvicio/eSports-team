# MEAN

O termo MEAN é um acrônimo que representa quatro tecnologias: MongoDB um banco não  relacional orientado a documentos, Express um framework de rotas, AngularJS como framework front-end o NodeJS como plataforma para execução de código JavaScript no brack-end. O termo foi cunhado em 2013 por Valeri Karpov do time do MongoDB após a sua participação em um Hackathon onde utilizou essa Stack de tecnologias.[1]

## MongoDB

O MongoDB é um banco de dados NoSQL de falta performance que possue código aberto, orientado a documentos caracterizado como schema-free e escrito em C++. Os dados são persistidos em coleções de dados que são representados usando o BSON.(MONGODB, 2017) O BSON é um formato de representação de documentos muito similar ao JSON. Suportanto todos os formatos encontrados no JSON como String, Inteiros, boleano e tambem tipos de dados como data, binary data, regular expression e code.(BSON, 2017)

![MongoDB](https://webassets.mongodb.com/_com_assets/cms/MongoDB-Logo-5c3a7405a85675366beb3a5ec4c032348c390b3f142f5e6dddf1d78e2df5cb5c.png)

### Orientado a Documentos

Banco de dados orientados a documentos podem representar estrutura de dados bastante complexas conhecidas como documentos. Os documentos são representações de um conjunto de chaves e valores que podem armazenar uma grande quantidade de informações. 

![Representação Documento](https://docs.mongodb.com/v3.2/_images/data-model-denormalized.png)


## Express

## AngularJS

## NodeJS

NodeJS é uma plataforma para execução de código JavaScript no servidor desenvolvida com base na V8, a engine de JavaScript do navegador Google Chrome. O NodeJS utiliza-se do paradigma de programação orientada a eventos e realiza requisições I/O não bloqueante. O que o torna uma plataforma muito leve e eficiente (NODE.JS, 2013). 

### V8

V8 é o motor de JavaScript com alto desempenho de código aberto do Google, escrito em C++ e usado no Chromium, NodeJS e várias outras aplicações. V8 implementa o ECMAScript conforme especificação no ECMA-262.(CHROME V8, 2017)

![V8 Engine](https://developers.google.com/v8/images/logo_v8_192px_clr.png)

A plataforma NodeJS foi criado por Ryan Dahl com a ajuda de 14 colaboradores em 2009. A plataforma aplica o conteido de requisições não bloqueantes que apresentam ótima performance porque utiliza todos os recursos do processadores e com baixo uso de memória.

### Single-Thread

O NodeJS implementa um gerenciador de eventos Single-Threads permitindo a realização das operações I/O não bloqueante.(THE NODE.JS EVENT LOOP, 2017). 
Esse gerenciador chamado de Event Loop é responsavel por delegar as operações ás suas respectivas Threads do Thread Pool. Essa operação é registrada no Event Queue onde ficam armazenada todas as operações que estão sendo realizadas, posteriormente quando alguma operação do Event Loop e finalizada, o NodeJS retorna para a operação que foi registada no Event Queue e da continuidade aos processos dessa operação. Esse comportamento é o que torna o NodeJS Non-blocking I/O.

![Event Loop](https://cdn-images-1.medium.com/max/800/1*S8jfqYQNkMuyWEk_5lxGYQ.jpeg)

Com todas essas características que tornam o NodeJS uma plataforma excelente para o desenvolvimento de aplicações, em especial a realização de eventos I/O não bloqueantes a plataforma hoje em dia e utilizada por grandes empresas como IBM, Intel, Microsoft,PayPal, SAP e Netflix.

![NodeJS](https://cdn-images-1.medium.com/max/800/1*Q2vvECIiCxo_-v95R3e-lQ.png)

# REFERENCIAS
 
[1]: Valeri Karpov. The mean stack: Mongodb, expressjs, angularjs and node.js. 2013.
 
NODEJS. Evented I/O for V8 JavaScript 2013. Disponível em < http://nodejs.org/>. Acesso em: 19 jun. 2017.
CHROME V8. Disponível em https://developers.google.com/v8/. Acesso em: 22 jun. 2017.
THE NODE.JS EVENT LOOP. Disponível em https://nodejs.org/en/docs/guides/event-loop-timers-and-nexttick/. Acesso em: 22 jun. 2017

BATISTA, F. et al. MongoDB: Banco de dados orientado a documento. 2012.Disponível em: http://MongoDB.machinario.com/
MONGODB. Disponível em https://www.mongodb.com/
BSON. Binary JSON. Disponível em http://bsonspec.org/
 
NodeJS Paypal: https://www.paypal-engineering.com/2013/11/22/node-js-at-paypal/
