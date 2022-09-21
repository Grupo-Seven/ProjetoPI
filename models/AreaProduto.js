module.exports = (sequelize, DataType)=>{
    const AreaProduto = sequelize.define("AreaProduto", {
        id_área_produtos:{
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        id_anunciantes:{
            type: DataType.INTEGER,
            foreignKey: true
        },
        setor_área_produtos:{
            type: DataType.ENUM('variedades', 'pet', 'farmácia')
        },
        id_produtos:{
            type: DataType.INTEGER,
            foreignKey: true
        }
    })

    return AreaProduto

}