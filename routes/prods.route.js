const express = require("express");
const prodRouter = express.Router();
const {getProds, createProd, findProdById, UpdateProdById, deleteProdById} = require('../controllers/ProdController');


prodRouter.get('/', getProds);
prodRouter.post('/',createProd);
prodRouter.get('/:id', findProdById);
prodRouter.put('/:id',UpdateProdById);
prodRouter.delete('/:id',deleteProdById);

module.exports=prodRouter;