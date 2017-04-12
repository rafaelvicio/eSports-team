var mongoose = require('mongoose');

var schema = mongoose.Schema({

  nome: {
    type: String,
    required: true
  },

  tag: {
    type: String,
    required: true
  },

  email: {
    type: String,
    required: true
  },

  biografia: {
    type: String,
    required: true
  },

  membros: [
    {
      idUsuario: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
      },
      role: {
        type: String,
        required: true
      },
      dataEntrada: {
        type: Date,
        default: Date.now,
        required: true
      }
    }

  ],

  treinos: [
    {
      timeDaCasa: {
        type: String,
        required: true
      },
      timeVisitante: {
        type: String,
        required: true
      },
      pontosTimeDaCasa: {
        type: Number,
        default: 0
      },
      pontosTimeVisitante: {
        type: Number,
        default: 0
      },
      tipo: {
        type: String,
        required: true
      },
      data: {
        type: Date,
        required: true
      },
      descricao: {
        type: String
      },
      status: {
        type: String
      },
      demo: {
        type: String
      },
      dataCriacao: {
        type: Date,
        default: Date.now,
        required: true
        }
    }
  ],

  campeonatos: [
    {
      name: {
        type: String,
        required: true
      },
      data: {
        type: Date,
        required: true
      },
      informacoes: {
        type: String
      },
      link: {
        type: String
      },
      dataCriacao: {
        type: Date,
        default: Date.now,
        required: true
      }
    }
  ],

  reunioes: [
    {
      titulo: {
        type: String,
        required: true
      },
      data: {
        type: Date,
        default: Date.now,
        required: true
      },
      pautas: [
        {
          nome: {
            type: String,
            required: true
          }
        }

      ],
      dataCriacao: {
        type: Date,
        default: Date.now,
        required: true
      }
    }
  ],

  dataCriacao: {
    type: Date,
    default: Date.now,
    required: true
  }

});

mongoose.model('Time', schema);
