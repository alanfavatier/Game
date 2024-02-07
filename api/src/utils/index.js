// creo una funcion purificadorea que limpia los datos para traer solo los necesarios
const infoCleaner= (arr)=> arr.map(user=>{
    return{
        name:user.name,
        email:user.email,
        phone:user.phone,
        created: false
    }
})  

module.exports= {infoCleaner}