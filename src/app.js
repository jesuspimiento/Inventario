/*importamo al framework express */
import express from "express" ;
import cors from "cors"
import categoriasRoute from "./routes/categorias.routes.js"
/* asignamos app toda funcionalidad para mi servidor web   */
const app = express();

/* setear un puerto a mi web server */

app.set("port", 5000)

app.use(cors());

/* routes */
app.use("/api/categorias",categoriasRoute)

/* Hacemos dsiponible a mi server app para toda la aplicacion*/
 
export default app;
