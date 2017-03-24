Sobre a Documentação:

O MongoDB não trabalha com estruturadas de dados bem definidas, ele utiliza schema dinâmicos. Com ele é possivel criar coleções sem que a estrutura, campos ou tipos de valores dos documentos estejam definidos. Essa forma flexível de armazenar os dados nos permite trabalhar com estrutura e dados bastantes hererogêneos.

Toda a documentação do Modelo de Dados foi realizada com base na documentação oficial do MongoDB: https://docs.mongodb.com/manual/core/data-modeling-introduction/

Modelo de Dados:

Entidade {
  Atributo {} 
}

Exemplo:

User {
  _id{},
  name: {},
  password: {},
  email: {},
  times: [
    name: {},
    tag: {},
    description: {}
  ],
  creationDate: {}
}

Detalhamento de Dados:

Entidade {
  Atributo { Informações } 
}

Exemplo: 

User {
  _id { <ObjectId> },
  name: { type: "String", legth: "12", required: true }
  password: { type: "String", legth: "22", require: true},
  email: { type: "String", legth: "30", require: true},
  times: [
    name: { type: "String", legth: "12", require: true },
    tag: { type: "String", legth: "3"},
    description: { type: "String", legth: "300" }
  ],
  creationDate: { type: Date, Default: Date.Now() }
 }
