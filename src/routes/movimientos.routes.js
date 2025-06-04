import{Router} from "express";
import { methodHTTP as movimientoController } from "../controllers/movimiento.controller.js";

/*Creamos el enrutador*/
const router = Router();


/*Configuramos respuesta desde server metodo http get*/
router.get("/", movimientoController.getMovimientos ); /* Para CRUD - Read*/
router.post("/", movimientoController.postMovimientos); /* Para CRUD - Create*/


export default router;