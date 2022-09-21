module.exports = (sequelize, DataType)=>{
    const Comprador = sequelize.define("Comprador", {
    id_comprador:{
        type: DataType.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    email_comprador:{
        type: DataType.STRING,
        allowNull: false,
        primaryKey: true,
    },
    senha_comprador:{
        type: DataType.STRING,
        primaryKey: true,
    }
},{
    //configuraçoes ficam na parte debaixo
    tableName: "comprador", 
    timestamps: false

})

    return Comprador
}