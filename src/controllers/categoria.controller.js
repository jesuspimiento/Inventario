import getConnection from "./../db/database.js"

const getCategorias = async (req, res)=>{
    try {
        const pool  = await getConnection();
        const result = await pool.query("SELECT CategoriaID, CategoriaNombre, Descripcion, Imagen FROM categorias")
        res.json(result);
    } catch (error) {
        console.error("Error 500");
    }
}
const postCategorias = async (req, res)  =>{
    try {
        const {CategoriaNombre, Descripcion, Imagen} = req.body;

        const category ={CategoriaNombre, Descripcion, Imagen}
    
        const pool = await getConnection();

        const result = await pool.query("INSERT INTO categorias SET ?", category)

        res.json(result)

    } catch (error) {
        console.error("ERROR 500");
    }
}

const getCategory = async (req, res)=>{
    try {
        console.log(req.param);
        const {id} = req.params
        const pool  = await getConnection();
        const result = await pool.query("SELECT CategoriaID, CategoriaNombre, Descripcion, Imagen FROM categorias WHERE CategoriaID = ?", id)
        res.json(result);
    } catch (error) {
        console.error("Error 500");
    }
}

const deleteCategory = async (req, res)=>{
    try {
        console.log("Id de categoria a borrar: ",req.params);
        const {id} = req.params
        const pool  = await getConnection();
        const result = await pool.query("DELETE FROM categorias WHERE CategoriaID = ?", id)
        res.json(result);
    } catch (error) {
        console.error("Error 500");
    }
}

const updateCategorias = async (req, res)  =>{
    try {

        const {id} = req.params
        const {CategoriaNombre, Descripcion, Imagen} = req.body;

        const category ={CategoriaNombre, Descripcion, Imagen}
    
        const pool  = await getConnection();

        const result = await pool.query("UPDATE categorias SET ? WHERE CategoriaID = ?",[category, id])

        res.json(result)

    } catch (error) {
        console.error("ERROR 500");
    } 
}
   

export const methodHTTP = {
    getCategorias,
    postCategorias,
    getCategory,
    deleteCategory,
    updateCategorias
}

