import { Component, Inject} from '@angular/core';
import {
  MAT_SNACK_BAR_DATA,
} from '@angular/material/snack-bar';
@Component({
  selector: 'app-toaster',
  standalone: true,
  imports: [],
  templateUrl: './toaster.component.html',
})
export class ToasterComponent {
  constructor(@Inject(MAT_SNACK_BAR_DATA) public data: any) {}
}
