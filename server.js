const express = require("express");
const app = express();
const port = 5050;
const prodRouter = require("./routes/prods.route")
const databaseMysql = require("./config/mysql")
const cors = require('cors')


app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(prodRouter);




databaseMysql.authenticate()
.then(()=>{
    console.log('Conexion exitosa.')
}).catch(e =>{
    console.log('Error: '+e)
})



app.listen(port, () => {
    console.log(`Servidor corriendo por el puerto ${port}`);
})

// Lautaro Rocha11:18
// npm i cors

// fede lanci11:18
// Yo usé npm i --save cors

// Lautaro Rocha11:18
// y en la app pone
// app.use(cors())
// antes lo declaras así const cors = require('cors')
