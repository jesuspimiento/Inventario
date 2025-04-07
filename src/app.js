/*importamo al framework express */
import express from "express" ;

/* asignamos app toda funcionalidad para mi servidor web   */
const app = express();

/* setear un puerto a mi web server */

app.set("port", 5000)

/* Hacemos dsiponible a mi server app para toda la aplicacion*/
 
export default app;
