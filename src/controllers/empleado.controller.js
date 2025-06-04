import getConnection from "./../db/database.js"

const getEmpleados = async (req, res)=>{
    try {
        const connection  = await getConnection();
        const result = await connection.query("SELECT * FROM empleados")
        res.json(result);
    } catch (error) {
        console.error("Error 500");
    }
}

const postEmpleados = async (req, res)  =>{
    try {
        const {Nombre, Cargo, Telefono} = req.body;

        const empleado ={Nombre, Cargo, Telefono}
    
        const connection  = await getConnection();

        const result = await connection.query("INSERT INTO empleados SET ?", empleado)

        res.json(result)

    } catch (error) {
        console.error("ERROR 500");
    }
}


export const methodHTTP = {
    getEmpleados,
    postEmpleados
}