import getConnection from "./../db/database.js"

const getMovimientos= async (req, res)=>{
    try {
        const connection  = await getConnection();
        const result = await connection.query("SELECT * FROM movimientos")
        res.json(result);
    } catch (error) {
        console.error("Error 500");
    }
}

const postMovimientos = async (req, res)  =>{

    try {
        const {Tipo, ProductoID, Cantidad, Motivo, Fecha, UsuarioID} = req.body;

        const move ={Tipo, ProductoID, Cantidad, Motivo, Fecha, UsuarioID}
    
        const connection  = await getConnection();

        const result = await connection.query("INSERT INTO movimientos SET ?", move)

        res.json(result)

    } catch (error) {
        console.error("ERROR 500");
    }
}

export const methodHTTP = {
    
    getMovimientos,
    postMovimientos
}
