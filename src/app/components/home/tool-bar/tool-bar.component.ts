import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Router, RouterLink } from '@angular/router';
import { AddEditItemsService } from '../../../service/add-edit-items.service';

@Component({
  selector: 'app-tool-bar',
  standalone: true,
  imports: [MatToolbarModule, MatIconModule, CommonModule],
  templateUrl: './tool-bar.component.html',
  styleUrl: './tool-bar.component.scss'
})
export class ToolBarComponent {
  @Output() isExpanded = new EventEmitter(true);
  isSideNavOpen = true
  constructor(private router: Router,private addEditService: AddEditItemsService) { }
  expanded() {
    this.isSideNavOpen = !this.isSideNavOpen
    this.isExpanded.emit(this.isSideNavOpen)
  }
  goToItem() {
    this.addEditService.item.next({})
    this.router.navigate(['/item'])
  }
}
