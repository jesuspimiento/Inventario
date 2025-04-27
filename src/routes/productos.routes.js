import{Router} from "express";
import { methodHTTP as productoController } from "../controllers/producto.controller.js";

/*Creamos el enrutador*/
const router = Router();

/*Configuramos respuesta desde server metodo http get*/
router.get("/", productoController.getProductos ); /* Para CRUD - Read*/


/*Ruta que recibe como parametro tanto el cuerpo del id a actualizar*/
router.put("/:id", productoController.updateProductos); /* Para CRUD - Delete 1 sola fila  */

/*hacemos disponible a router en el server */
export default router;