import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { Router } from '@angular/router';
import { AddEditItemsService } from '../../../service/add-edit-items.service';
import { productModel } from '../../../models/products.model';

@Component({
  selector: 'app-inventory-item',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MatCardModule, MatFormFieldModule, MatInputModule, MatButtonModule],
  templateUrl: './inventory-item.component.html',
  styleUrl: './inventory-item.component.scss'
})
export class InventoryItemComponent {
  form!: FormGroup;
  isEdit: boolean = false
  constructor(private router: Router, public addEditService: AddEditItemsService, private fb: FormBuilder) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      category: ['', Validators.required],
      stock: [0, [Validators.required, Validators.min(0)]],
      ProductId: ['']
    });
    addEditService.item.subscribe({
      next: (i: productModel) => {
        if (i && Object.keys(i).length > 0) {
          this.isEdit = true
          this.form.patchValue({
            'name': i?.ProductName,
            'category': i?.category,
            'stock': i?.AvailablePieces,
            'ProductId': i?.ProductId
          })
        } else {
          // this.form.reset()
          this.form.patchValue({
            'name': '',
            'category': '',
            'stock': 0,
            'ProductId': null
          })
          this.isEdit = false
        }
      }
    })

  }
  ngOnInit(): void {
  }

  onSubmit() {
    if (this.form.valid) {
      const newItem = {
        ProductId: this.form.controls['ProductId'].value ? this.form.controls['ProductId'].value : Date.now(),
        ProductName: this.form.value.name,
        category: this.form.value.category,
        AvailablePieces: this.form.value.stock,
        lastDate: new Date()
      };
      this.addEditService.item.next(newItem)
      this.router.navigate(['/dashboard']);

    } else {
      this.form.markAllAsTouched()
    }
  }

  cancel() {
    this.router.navigate(['/dashboard']);
  }
}
