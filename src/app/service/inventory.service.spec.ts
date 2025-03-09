import { TestBed } from '@angular/core/testing';
import { InventoryService } from './inventory.service';
import { productModel } from '../models/products.model';
import { of } from 'rxjs';
import * as mockData from '../../assets/dummyData/products';

describe('InventoryService', () => {
  let service: InventoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InventoryService]
    });
    service = TestBed.inject(InventoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should have an inventory list initialized', () => {
    expect(service.inventoryList).toEqual(mockData.default.data);
  });

  it('should return an observable of productModel[]', (done) => {
    service.inventoryData().subscribe((data: productModel[]) => {
      expect(data).toEqual(mockData.default.data);
      expect(data.length).toBeGreaterThan(0);
      done(); // ✅ Ensures the test waits for the async observable
    });
  });

  it('should return an empty list if inventoryList is empty', (done) => {
    service.inventoryList = []; // Clear inventory
    service.inventoryData().subscribe((data: productModel[]) => {
      expect(data).toEqual([]);
      done();
    });
  });
});
