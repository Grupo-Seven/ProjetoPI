module.exports = (sequelize, DataType)=>{
    const produto = sequelize.define("Produto", {
               
        id_produtos:{
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        setor_produtos:{
            type: DataType.ENUM('variedades', 'pet', 'farmacia') //do tipo string permitido a partir de uma lista de valores permitidos, conforme o arquivo .sql
        },
        descricao_produtos:{
            type: DataType.STRING,
            primaryKey: true
        },
        price_produtos:{
            type: DataType.DECIMAL,
            primaryKey: true,
        },
        texto_produtos: {
           type:DataType.TEXT
        },

        marca_produtos:{
            type: DataType.TEXT
        }
    })

      return produto

}