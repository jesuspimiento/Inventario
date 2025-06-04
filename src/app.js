/*importamos al framework express */
import express from "express" ;
import cors from "cors"
import categoriasRoute from "./routes/categorias.routes.js"
import empleadosRoute from "./routes/empleados.routes.js"
import clientesRoute from "./routes/clientes.routes.js"
import productosRoute from "./routes/productos.routes.js"
import facturasRoute from "./routes/facturas.routes.js"
import usuariosRoute from "./routes/usuarios.routes.js"
import proveedoresRoute from "./routes/proveedores.routes.js"
import movimientosRoute from "./routes/movimientos.routes.js"

/* asignamos app toda funcionalidad para mi servidor web   */
const app = express();

/* setear un puerto a mi web server */

app.set("port", 5000)

/*Middleware*/
app.use(express.json());

app.use(cors());

/* routes */
app.use("/api/categorias",categoriasRoute)

app.use("/api/empleados",empleadosRoute)

app.use("/api/clientes",clientesRoute)

app.use("/api/productos",productosRoute)

app.use("/api/facturas",facturasRoute)

app.use("/api/usuarios",usuariosRoute)

app.use("/api/proveedores", proveedoresRoute)

app.use("/api/movimientos", movimientosRoute)

app.get ('/',(req,res)=>{
    res.send('REST API EN RENDER WITHOUT ENDPOINTS')

})

/* Hacemos dsiponible a mi server app para toda la aplicacion*/
 
export default app;
