module.exports = (sequelize, DataType)=>{
const Anunciantes = sequelize.define("Anunciantes", {
    timeStamps: false,
    
    id_anunciantes:{
        type: DataType.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    email_anunciantes:{
        type: DataType.STRING,
        primaryKey: true,
    },
    senha_anunciantes:{
        type: DataType.STRING,
          
        primaryKey: true,
    }
})
    return Anunciantes
}