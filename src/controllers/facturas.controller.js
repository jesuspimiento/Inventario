import getConnection from "./../db/database.js"

const getFacturas= async (req, res)=>{
    try {
        const connection  = await getConnection();
        const result = await connection.query("SELECT * FROM facturas")
        res.json(result);
    } catch (error) {
        console.error("Error 500");
    }
}

export const methodHTTP = {
    getFacturas
}
