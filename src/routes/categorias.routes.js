import{Router} from "express";
import { methodHTTP as categoriaController } from "../controllers/categoria.controller.js";


/*Creamos el enrutador*/
const router = Router();

/*Configuramos respuesta desde server metodo http get*/
router.get("/", categoriaController.getCategorias )

/*hacemos discponible a router en el server */
export default router;