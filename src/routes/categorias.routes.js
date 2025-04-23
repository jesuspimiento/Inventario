import{Router} from "express";
import { methodHTTP as categoriaController } from "../controllers/categoria.controller.js";


/*Creamos el enrutador*/
const router = Router();

/*Configuramos respuesta desde server metodo http get*/
router.get("/", categoriaController.getCategorias ); /* Para CRUD - Read*/
router.post("/", categoriaController.postCategorias ); /* Para CRUD - Create*/

/*ruta que recibe un parametro*/
router.get("/:id", categoriaController.getCategory ); /* Para CRUD - Read 1 sola fila*/

/*Ruta que recibe parametro id  de categoria a borrar*/
router.delete("/:id", categoriaController.deleteCategory ); /* Para CRUD - Delete 1 sola fila  */

/*Ruta que recibe como parametro tanto el cuerpo del id a actualizar*/
router.put("/:id", categoriaController.updateCategorias ); /* Para CRUD - Delete 1 sola fila  */

/*hacemos disponible a router en el server */
export default router;