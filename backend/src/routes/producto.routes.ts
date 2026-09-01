import { Router } from "express";
import {
    obtenerProductos,
    obtenerProductoId,
    crearProducto
} from "../controllers/producto.controller";

const router = Router();

router.get("/", obtenerProductos);

router.get("/:id", obtenerProductoId);

router.post("/", crearProducto);

export { router as productoRoutes };