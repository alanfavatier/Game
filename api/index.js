const server = require("./src/app")
const {conn}= require("./src/db")

//ACA LEVANTO EL SERVIDOR EN EL PUERTO 3001

const PORT= 3001

server.listen(PORT, ()=>{
    conn.sync({force:false});//sync permite que se conecten el server con la bdd.
    console.log(`escuhando en puerto ${PORT}`);
});
