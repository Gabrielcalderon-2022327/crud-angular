import express from "express";
import cors from "cors";

interface Producto{
    id: number;
    producto: string;
    precio: number;
    cantidad: number
}

import {productoRoutes} from "./routes/producto.routes";
import { logger } from "./controllers/producto.controller";

export var productos: Producto[] = [
    {id: 1, producto: "Coca Cola", precio: 1.5, cantidad: 10},
    {id: 2, producto: "Pepsi", precio: 1.4, cantidad: 15}
]

const app = express();
app.use(express.json());
app.use(cors());
app.use(logger);

app.use("/api/productos", productoRoutes)

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`API FUNCIONANDO: http://localhost:${PORT}`);
});