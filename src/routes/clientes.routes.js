import{Router} from "express";
import { methodHTTP as clienteController } from "../controllers/cliente.controller.js";

/*Creamos el enrutador*/
const router = Router();


/*Configuramos respuesta desde server metodo http get*/
router.get("/", clienteController.getClientes ); /* Para CRUD - Read*/
router.post("/", clienteController.postClientes ); /* Para CRUD - Create*/


export default router;