import{Router} from "express";
import { methodHTTP as proveedorController } from "../controllers/proveedor.controller.js";

/*Creamos el enrutador*/
const router = Router();


/*Configuramos respuesta desde server metodo http get*/
router.get("/", proveedorController.getProveedores ); /* Para CRUD - Read*/
router.post("/", proveedorController.postProveedores ); /* Para CRUD - Create*/


export default router;