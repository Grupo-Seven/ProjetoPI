module.exports = (sequelize, DataType)=>{
    const produto = sequelize.define("Produto", {
        timeStamps: false,
        
        id_produtos:{
            type: DataType.INTERGER,
            primaryKey: true,
            autoIncrement: true
        },
        setor_produtos:{
            type: DataType.ENUM //do tipo string permitido a partir de uma lista de valores permitidos, conforme o arquivo .sql
        },
        descricao_produtos:{
            type: DataType.STRING,
            primaryKey: true,
            autoIncrement: true
        },
        price_produtos:{
            type: DataType.DECIMAL,
            primaryKey: true,
        },
        texto_produtos: Datatype.TEXT,

        marca_produtos: DataType.TINYTEXT
    })

    const comprador = sequelize.define("Comprador", {
        tableName: "comprador",
        timeStamps: false,

        id_comprador:{
            type: DataType.INTERGER,
            primaryKey: true,
            autoIncrement: true
        },
        email_comprador:{
            type: DataType.STRING,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        senha_comprador:{
            password:{
                type: 'VARBINARY(50)',
              },
            primaryKey: true,
        }
    })

    const anunciantes = sequelize.define("Anunciantes", {
        timeStamps: false,
        
        id_anunciantes:{
            type: DataType.INTERGER,
            primaryKey: true,
            autoIncrement: true
        },
        email_anunciantes:{
            type: DataType.STRING,
            primaryKey: true,
            autoIncrement: true
        },
        senha_anunciantes:{
            password:{
                type: 'VARBINARY(50)',
              },
            primaryKey: true,
        }
    })

    return produto
    return comprador
    return anunciantes
}