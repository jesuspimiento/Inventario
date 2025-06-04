import{Router} from "express";
import { methodHTTP as empleadoController } from "../controllers/empleado.controller.js";

/*Creamos el enrutador*/
const router = Router();

/*Configuramos respuesta desde server metodo http get*/
router.get("/", empleadoController.getEmpleados ); /* Para CRUD - Read*/
router.post("/", empleadoController.postEmpleados ); /* Para CRUD - Crear*/

export default router;
