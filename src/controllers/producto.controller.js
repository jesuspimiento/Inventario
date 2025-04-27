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

const updateProductos = async (req, res)  =>{
    try {

        const {id} = req.params
        const {ProductoNombre, ProveedorID, CategoriaID, CantidadPorUnidad, PrecioUnitario, UnidadesStock, UnidadesPedidas, NivelReorden, Discontinuado} = req.body;

        const products ={ProductoNombre, ProveedorID, CategoriaID, CantidadPorUnidad, PrecioUnitario, UnidadesStock, UnidadesPedidas, NivelReorden, Discontinuado}
    
        const connection  = await getConnection();

        const result = await connection.query("UPDATE productos SET ? WHERE ProductoID = ?",[products, id])

        res.json(result)

    } catch (error) {
        console.error("ERROR 500");
    } 
}
   
export const methodHTTP = {
    getProductos,
    updateProductos

}
