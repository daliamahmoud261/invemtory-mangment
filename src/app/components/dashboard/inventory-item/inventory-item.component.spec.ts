import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InventoryItemComponent } from './inventory-item.component';
import { AddEditItemsService } from '../../../service/add-edit-items.service';
import { Router } from '@angular/router';
import { productModel } from '../../../models/products.model';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { BehaviorSubject, of, Subject } from 'rxjs';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('InventoryItemComponent', () => {
  let component: InventoryItemComponent;
  let fixture: ComponentFixture<InventoryItemComponent>;
  let mockService: jasmine.SpyObj<AddEditItemsService>;
  let mockRouter: jasmine.SpyObj<Router>;
  let itemSubject: Subject<productModel>;

  beforeEach(async () => {
    itemSubject = new BehaviorSubject<productModel>({} as productModel);

    mockService = jasmine.createSpyObj('AddEditItemsService', [], { item: itemSubject });

    // Mock Router
    mockRouter = jasmine.createSpyObj('Router', ['navigate']);

    await TestBed.configureTestingModule({
      imports: [
        InventoryItemComponent,
        CommonModule,
        BrowserAnimationsModule
      ],
      providers: [
        { provide: AddEditItemsService, useValue: mockService },
        { provide: Router, useValue: mockRouter }, // ✅ Provide the mock Router
        FormBuilder,
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InventoryItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize the form with default values', () => {
    expect(component.form).toBeDefined();
    expect(component.form.value).toEqual({
      name: '', 
      category: '',
      stock: '',
      ProductId: null 
    });
  });

  it('should update the form when an existing item is provided', () => {
    const mockProduct: productModel = {
      ProductId: 123,
      ProductName: 'Test Product',
      category: 'Electronics',
      AvailablePieces: 5,
      lastDate: new Date(),
    };

    // Emit the mock product to simulate data received
    itemSubject.next(mockProduct);
    fixture.detectChanges();

    expect(component.isEdit).toBeTrue();
    expect(component.form.value).toEqual({
      name: 'Test Product',
      category: 'Electronics',
      stock: 5,
      ProductId: 123,
    });
  });

  it('should reset the form if no product is provided', () => {
    itemSubject.next({} as productModel);
    fixture.detectChanges();

    expect(component.isEdit).toBeFalse();
    expect(component.form.value).toEqual({
      name: '',
      category: '',
      stock: 0,
      ProductId: null,
    });
  });

  it('should mark form as touched if invalid on submit', () => {
    spyOn(component.form, 'markAllAsTouched');
    component.onSubmit();
    expect(component.form.markAllAsTouched).toHaveBeenCalled();
  });


  it('should add new item and navigate to dashboard on submit', () => {
    component.form.setValue({
      name: 'New Item',
      category: 'Toys',
      stock: 10,
      ProductId: null,
    });

    component.onSubmit();

    expect(mockRouter.navigate).toHaveBeenCalledWith(['/dashboard']);
  });

  it('should navigate back to dashboard on cancel', () => {
    component.cancel();
    expect(mockRouter.navigate).toHaveBeenCalledWith(['/dashboard']);
  });
});
0