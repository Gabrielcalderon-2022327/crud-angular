export interface Producto {
    id: number,
    producto: string,
    precio: number,
    cantidad: number
}

export interface ProductoResponse {
    message: string,
    productos: Producto[]
}

export interface ProductoCreate{
    producto: string,
    precio: number,
    cantidad: number
}