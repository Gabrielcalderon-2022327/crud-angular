import { Component, OnInit, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { productoService } from '../../services/productoService';
import { Producto } from '../../models/producto';
import { ProductoDialog } from '../producto-dialog/producto-dialog';


@Component({
  selector: 'app-productos',
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule
  ],
  templateUrl: './productos.html',
  styleUrl: './productos.css',
})
export class Productos implements OnInit {
  productos = signal<Producto[]>([]);

  private productoService = inject(productoService);
  private dialog = inject(MatDialog);

  ngOnInit(): void {
    this.loadProductos();
  }

  loadProductos(): void {
    this.productoService.getAllProductos().subscribe({
      next: (datos) => this.productos.set(datos.productos),
      error: (error) => console.error('Error al cargar los productos:', error)
    });
  }

  abrirDialogo(): void {
    const dialogRef = this.dialog.open(ProductoDialog, {
      width: '480px',
      panelClass: 'custom-dialog'
    });

    dialogRef.afterClosed().subscribe((resultado) => {
      if (resultado) {
        this.productoService.createProducto(resultado).subscribe({
          next: () => this.loadProductos(),
          error: (err) => console.error('Error al guardar', err)
        });
      }
    });
  }
}