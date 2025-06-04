import getConnection from "./../db/database.js"

const getProveedores = async (req, res)=>{
    try {
        const connection  = await getConnection();
        const result = await connection.query("SELECT * FROM proveedores")
        res.json(result);
    } catch (error) {
        console.error("Error 500");
    }
}
const postProveedores = async (req, res)  =>{
    try {
        const {Nombre, Contacto, Telefono, Direccion} = req.body;

        const supplier ={Nombre, Contacto, Telefono, Direccion}
    
        const connection  = await getConnection();

        const result = await connection.query("INSERT INTO proveedores SET ?", supplier)

        res.json(result)

    } catch (error) {
        console.error("ERROR 500");
    }
}

export const methodHTTP = {
    getProveedores,
    postProveedores
}
