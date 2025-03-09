import { Component } from '@angular/core';
import { ToolBarComponent } from '../tool-bar/tool-bar.component';
import { SideNavComponent } from '../side-nav/side-nav.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [SideNavComponent,ToolBarComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {
  isExpandedNav:boolean=true
  isExpanded(event:any){
    this.isExpandedNav=event
  }
}
