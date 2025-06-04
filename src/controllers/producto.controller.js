import getConnection from "./../db/database.js"

const getProductos= async (req, res)=>{
    try {
        const connection  = await getConnection();
        const result = await connection.query("SELECT * FROM productos")
        res.json(result);
    } catch (error) {
        console.error("Error 500");
    }
}

const postProductos = async (req, res)  =>{

    try {
        const {ProductoNombre, ProveedorID, CategoriaID, CantidadPorUnidad, PrecioUnitario, UnidadesStock, UnidadesPedidas, Discontinuado} = req.body;

        const products ={ProductoNombre, ProveedorID, CategoriaID, CantidadPorUnidad, PrecioUnitario, UnidadesStock, UnidadesPedidas, Discontinuado}
    
        const connection  = await getConnection();

        const result = await connection.query("INSERT INTO productos SET ?", products)

        res.json(result)

    } catch (error) {
        console.error("ERROR 500");
    }
}

export const methodHTTP = {
    getProductos,
    postProductos
    
}
