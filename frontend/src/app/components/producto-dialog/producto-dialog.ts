import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-producto-dialog',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule
  ],
  templateUrl: './producto-dialog.html',
  styleUrl: './producto-dialog.css'
})
export class ProductoDialog {
  private formBuilder = inject(FormBuilder);
  private dialogRef = inject(MatDialogRef<ProductoDialog>);

  productoForm = this.formBuilder.group({
    producto: ['', Validators.required],
    precio: [null as number | null, [Validators.required, Validators.min(0)]],
    cantidad: [null as number | null, [Validators.required, Validators.min(0)]]
  });

  onGuardar() {
    if (this.productoForm.valid) {
      this.dialogRef.close(this.productoForm.value);
    }
  }

  onCancelar() {
    this.dialogRef.close();
  }
}