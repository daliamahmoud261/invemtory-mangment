import { Component, Inject, Input, input } from '@angular/core';
import {
  MAT_SNACK_BAR_DATA,
} from '@angular/material/snack-bar';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
@Component({
  selector: 'app-toaster',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './toaster.component.html',
})
export class ToasterComponent {
  constructor(@Inject(MAT_SNACK_BAR_DATA) public data: any) {}
}
