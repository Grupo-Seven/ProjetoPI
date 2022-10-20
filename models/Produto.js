module.exports = (sequelize, DataType)=>{
    const Produto = sequelize.define("Produto", {
        id_produtos:{
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },

        setor_produtos:{
<<<<<<< HEAD
            type: DataType.ENUM('variedades', 'pet', 'farmácia') //do tipo string permitido a partir de uma lista de valores permitidos, conforme o arquivo .sql
        },
        descricao_produtos:{
            type: DataType.STRING,
            primaryKey: true,
=======
            type: DataType.ENUM('variedades', 'pet', 'farmacia') //do tipo string permitido a partir de uma lista de valores permitidos, conforme o arquivo .sql
        },

        descricao_produtos:{
            type: DataType.STRING,
            primaryKey: true,
            type: DataType.ENUM('variedades', 'pet', 'farmácia') //do tipo string permitido a partir de uma lista de valores permitidos, conforme o arquivo .sql
>>>>>>> 11a979224331441a1c7ef7be43496f1d21fe3560
        },

        descricao_produtos:{
            type: DataType.STRING,
            primaryKey: true,
        },

        price_produtos:{
            type: DataType.DECIMAL,
            primaryKey: true,
        },

        texto_produtos: {
<<<<<<< HEAD
            type: DataType.TEXT,
        },
        marca_produtos:{
            type: DataType.STRING
        },  
    })

    return Produto

}
=======
           type:DataType.TEXT
        },

        marca_produtos:{
            type: DataType.TEXT
        }
    })

      return Produto 
    }
>>>>>>> 11a979224331441a1c7ef7be43496f1d21fe3560
