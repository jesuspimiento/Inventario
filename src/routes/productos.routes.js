import{Router} from "express";
import { methodHTTP as productoController } from "../controllers/producto.controller.js";

/*Creamos el enrutador*/
const router = Router();

/*Configuramos respuesta desde server metodo http get*/
router.get("/", productoController.getProductos ); /* Para CRUD - Read*/

router.post("/", productoController.postProductos ); /* Para CRUD - Crear*/

/*hacemos disponible a router en el server */
export default router;