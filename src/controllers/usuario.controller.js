import getConnection from "./../db/database.js"

const getUsuarios = async (req, res)=>{
    try {
        const connection  = await getConnection();
        const result = await connection.query("SELECT * FROM usuarios")
        res.json(result);
    } catch (error) {
        console.error("Error 500");
    }
}
const postUsuarios = async (req, res)  =>{
    try {
        const {Nombre, Correo, Contraseña, Rol} = req.body;

        const user ={Nombre, Correo, Contraseña, Rol}
    
        const connection  = await getConnection();

        const result = await connection.query("INSERT INTO usuarios SET ?", user)

        res.json(result)

    } catch (error) {
        console.error("ERROR 500");
    }
}

export const methodHTTP = {
    getUsuarios,
    postUsuarios
}
