import { Injectable, signal } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { productModel } from '../models/products.model';
import { ToasterComponent } from '../shared/toaster/toaster.component';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class AddEditItemsService {
  item: BehaviorSubject<productModel> = new BehaviorSubject<productModel>({});
  constructor(private _snackBar: MatSnackBar) { }
  openSnackBar(err: string) {
    this._snackBar.openFromComponent(ToasterComponent, {
      duration: 5 * 1000,
      data: { err: err },
      verticalPosition: 'top',
    });
  }
}
