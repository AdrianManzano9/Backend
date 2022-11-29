const Products  = require('../models/prod.model');
// const { ValidateProd } = require('../models/prod.model')


const getProds = async (req, res) => {
    const response = await Products.findAll().then((data) => {
        const res = { error: false, data: data }
        return res;
    }).catch(error => {
        const res = { error: true, message: error }
        return res;
    });
    res.json(response);
}

const createProd = async (req, res) => {
    try {
        const modelData = {
            name: req.body.name,
            image: req.body.image,
            descrip: req.body.descrip,
            precio: req.body.precio,
            cant: 0,
            cantD: req.body.cantD,
        }
        const response = await Products.create(modelData)
            .then((data) => {
                const res = { error: false, data: data, message: "Product Create" }
                return res;
            }).catch(error => {
                const res = { error: true, message: error }
                return res;
            });
        res.json(response);
    } catch (e) {
        console.log(e)
    }
}


const findProdById = async (req, res) => {
    try {
        const { id } = req.params;
        const response = await Products.findAll({
            where: { id: id }
        }).then((data) => {
            const res = { error: false, data: data }
            return res;
        }).catch(error => {
            const res = { error: true, message: error }
            return res;
        });
        res.json(response);
    } catch (e) {
        console.log(e);
    }
}

const UpdateProdById = async (req, res) => {
    try {
        const { id } = req.params;
        const response = await Products.update(req.body, {
            where: { id: id }
        }).then((data) => {
            const res = { error: false, data: data, message: "Product Update" }
            return res;
        }).catch(error => {
            const res = { error: true, message: error }
            return res;
        });
        res.json(response);
    } catch (e) {
        console.log(e)
    }
}

const deleteProdById = async (req, res) => {
    try {
        const { id } = req.params;

        const response = await Products.destroy({
            where: { id: id }
        }).then((data) => {
            const res = { error: false, data: data, message: "Deleted Successful" }
            return res;
        }).catch(error => {
            const res = { error: true, message: error }
            return res;
        });
        res.json(response);
    } catch (e) {
        console.log(e);
    }
}
module.exports = { getProds, createProd, findProdById, UpdateProdById, deleteProdById }