import { Request, Response, NextFunction } from 'express';
import { productos } from "..";

var id = 2;

export const obtenerProductos = (req: Request, res: Response) => {
    res.json({
        message: "Lista de productos",
        productos: productos
    });
}

export const obtenerProductoId = (req: Request, res: Response) => {
    const id = req.params.id;
    res.json({
        message: `Producto encontrado`,
        producto: productos.find(producto => producto.id === parseInt(id as string))
    });
}

export const crearProducto = (req: Request, res: Response) => {
    const { producto, precio, cantidad } = req.body;
    id++;
    productos.push({
        id,
        producto,
        precio,
        cantidad
    });
    res.status(201).json({
        mensaje: "Usuario creado",
        usuario: {
            producto,
            precio,
            cantidad
        }
    });
}

export const logger = (req: Request, res: Response, next: NextFunction) => {
    console.log(`PETICION: ${req.method} ${req.originalUrl}`);
    console.log("Body:", req.body);
    res.on("finish", () => {
        console.log(`RESPUESTA: ${req.method} ${req.originalUrl} ${res.statusCode}`);
    });

    next();
};