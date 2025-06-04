import{Router} from "express";
import { methodHTTP as usuarioController } from "../controllers/usuario.controller.js";

/*Creamos el enrutador*/
const router = Router();


/*Configuramos respuesta desde server metodo http get*/
router.get("/", usuarioController.getUsuarios ); /* Para CRUD - Read*/
router.post("/", usuarioController.postUsuarios ); /* Para CRUD - Create*/


export default router;