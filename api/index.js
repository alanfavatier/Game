const server = require("./src/app")
const {conn}= require("./src/db")
require("dotenv").config();

//ACA LEVANTO EL SERVIDOR EN EL PUERTO 3001

/* const PORT= 3001
 */
/* server.listen(PORT, ()=>{
    conn.sync({force:true});//sync permite que se conecten el server con la bdd.
    console.log(`escuhando en puerto ${PORT}`);
});
 */
conn.sync({force:true}).then(()=>{
    server.listen(process.env.PORT,()=>{

        console.log(`escuhando en puerto`, process.env.PORT);
    })
})