import{Router} from "express";
import { methodHTTP as facturasController } from "../controllers/facturas.controller.js";

/*Creamos el enrutador*/
const router = Router();

/*Configuramos respuesta desde server metodo http get*/
router.get("/", facturasController.getFacturas ); /* Para CRUD - Read*/

export default router;



