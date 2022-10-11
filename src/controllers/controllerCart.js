const controllersProdutos = require("../controllers/controllersProdutos")

const controllerCar = (function () {

    const addProduct = (product) => {
        let products = getProducts();
        products.push(product);
        localStorage.setItem('products', JSON.stringify(products));
    }

    const getProducts = () => {
        let products = localStorage.getItem('products');
        if (products === null) {
            return [];
        } else {
            return JSON.parse(products);
        }
    }

    return {
        addProduct,
        getProducts
    }}   ());

    module.exports = controllerCar;