import getConnection from "./../db/database.js"

const getClientes = async (req, res)=>{
    try {
        const connection  = await getConnection();
        const result = await connection.query("SELECT *  FROM clientes")
        res.json(result);
    } catch (error) {
        console.error("Error 500");
    }
}

const postClientes = async (req, res)  =>{
    try {
        const {ClienteID, Compania, Contacto, Titulo, Direccion, Ciudad, Regiones, CodigoPostal, Pais, Telefono, Fax} = req.body;

        const client ={ClienteID, Compania, Contacto, Titulo, Direccion, Ciudad, Regiones, CodigoPostal, Pais, Telefono, Fax}
    
        const connection  = await getConnection();

        const result = await connection.query("INSERT INTO clientes SET ?", client)

        res.json(result)

    } catch (error) {
        console.error("ERROR 500");
    }
}



export const methodHTTP = {
    getClientes,
    postClientes
}