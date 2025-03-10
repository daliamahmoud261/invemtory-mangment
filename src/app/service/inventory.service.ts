import { Injectable } from '@angular/core';
import data from '../../assets/dummyData/products';
import { productModel } from '../models/products.model';
import { Observable, of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class InventoryService {
  inventoryList:productModel[]=data.data

  inventoryData(): Observable<productModel[]>{
    return of(this.inventoryList)
  }
}
