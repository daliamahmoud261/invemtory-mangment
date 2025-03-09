import { Injectable, signal } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { productModel } from '../models/products.model';

@Injectable({
  providedIn: 'root'
})
export class AddEditItemsService {
  item: BehaviorSubject<productModel> = new BehaviorSubject<productModel>({});
  constructor() { }
}
