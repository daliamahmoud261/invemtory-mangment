import { Component, computed, DestroyRef, effect, inject, ViewChild } from '@angular/core';
import { InventoryService } from '../../service/inventory.service';
import { productModel } from '../../models/products.model';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatFormField, MatFormFieldModule, MatLabel } from '@angular/material/form-field';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatPaginator } from '@angular/material/paginator';
import { MatIconModule } from '@angular/material/icon';
import { AddEditItemsService } from '../../service/add-edit-items.service';
import { Router } from '@angular/router';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { SharedLoadingComponent } from '../../shared/shared-loading/shared-loading.component';
import { delay, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [MatTableModule, MatFormField, MatLabel, MatSelectModule, FormsModule,SharedLoadingComponent,
    MatIconModule, CommonModule, MatFormFieldModule, MatInputModule, MatPaginator],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {
  dataSource = new MatTableDataSource<productModel>([])
  displayedColumns: string[] = ['ProductName', 'category', 'AvailablePieces', 'lastDate', 'Edit'];
  editItems!: productModel
  destroyRef = inject(DestroyRef);
  Loader:boolean=false
  constructor(private _inventoryService: InventoryService, private addEditService: AddEditItemsService,
    private router: Router
  ) { }

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.inventoryData()

    this.addEditService.item.pipe(takeUntilDestroyed(this.destroyRef)).subscribe({
      next: (res: productModel) => {
        if (res && Object.keys(res).length > 0) {
          const existingIndex = this.dataSource.filteredData.findIndex(item => item.ProductId === res.ProductId);
          if (existingIndex !== -1) {
            this.dataSource.filteredData[existingIndex] = { ...res };
          } else {
            this.dataSource.filteredData.push(res);
          }
          this.dataSource._updateChangeSubscription();
        }
      }
    });
  }
  inventoryData() {
    this.Loader=true
    this._inventoryService.inventoryData().subscribe({
      next: (res: productModel[]) => {
        this.dataSource = new MatTableDataSource(res);
        of(true).pipe(delay(1000)).subscribe({
          next:()=>{
            this.Loader=false
            this.dataSource.paginator = this.paginator;
          }
        })
      },
      error:()=>{
        this.Loader=false
      }
    })
  }
  applySearch(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    this.dataSource.filterPredicate = (data: any, filter: string) => {
      return data.ProductName.toLowerCase().includes(filter);
    };
  }
  editItem(item: productModel) {
    this.addEditService.item.next(item)
    this.router.navigate(['/item'])
  }

  onSelectionChange(event: any) {
    const filterValue = event.value;
    this.dataSource.filterPredicate = (data: any, filter: string) => {
      if (filter === "low") {
        return data.AvailablePieces < 60;
      } else if (filter === "in") {
        return data.AvailablePieces >= 60;
      }
      return true;
    };
    this.dataSource.filter = filterValue || "apply";
  }
}