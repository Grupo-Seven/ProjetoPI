module.exports = (sequelize, DataType)=>{
<<<<<<< HEAD
    const produto = sequelize.define("Produto", {
               
=======
    const Produto = sequelize.define("Produto", {
>>>>>>> ed6134fb37f67ac83547886402fbcaea52bf97e9
        id_produtos:{
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        setor_produtos:{
<<<<<<< HEAD
            type: DataType.ENUM('variedades', 'pet', 'farmacia') //do tipo string permitido a partir de uma lista de valores permitidos, conforme o arquivo .sql
        },
        descricao_produtos:{
            type: DataType.STRING,
            primaryKey: true
=======
            type: DataType.ENUM('variedades', 'pet', 'farmácia') //do tipo string permitido a partir de uma lista de valores permitidos, conforme o arquivo .sql
        },
        descricao_produtos:{
            type: DataType.STRING,
            primaryKey: true,
>>>>>>> ed6134fb37f67ac83547886402fbcaea52bf97e9
        },
        price_produtos:{
            type: DataType.DECIMAL,
            primaryKey: true,
        },
        texto_produtos: {
<<<<<<< HEAD
           type:DataType.TEXT
        },

        marca_produtos:{
            type: DataType.TEXT
        }
    })

      return produto
=======
            type: DataType.TEXT,
        },
        marca_produtos:{
            type: DataType.STRING
        },  
    })

    return Produto
>>>>>>> ed6134fb37f67ac83547886402fbcaea52bf97e9

}