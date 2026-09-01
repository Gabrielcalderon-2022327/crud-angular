import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Producto, ProductoCreate, ProductoResponse } from '../models/producto';

@Injectable({
    providedIn: 'root'
})

export class productoService {
    private apiUrl = 'http://localhost:3000/api/productos';
    private http = inject(HttpClient);

    getAllProductos() : Observable<ProductoResponse> {
        return this.http.get<ProductoResponse>(this.apiUrl);
    }

    createProducto(producto: ProductoCreate) : Observable<ProductoCreate> {
        return this.http.post<ProductoCreate>(this.apiUrl, producto);
    }
}
