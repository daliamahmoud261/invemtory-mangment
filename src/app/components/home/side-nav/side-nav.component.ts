import { ChangeDetectorRef, Component, inject, Input } from '@angular/core';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import {BreakpointObserver, Breakpoints, MediaMatcher} from '@angular/cdk/layout';


@Component({
  selector: 'app-side-nav',
  standalone: true,
  imports: [MatSidenavModule,MatIconModule,MatListModule,CommonModule,RouterOutlet,RouterLink,RouterLinkActive
  ],
  templateUrl: './side-nav.component.html',
  styleUrl: './side-nav.component.scss'
})
export class SideNavComponent {
  @Input()isExpanded = true;
  isMobile = false;  // Tracks mobile state

  constructor(private breakpointObserver: BreakpointObserver) {
    this.breakpointObserver.observe([Breakpoints.Small, Breakpoints.XSmall]).subscribe(result => {
      this.isMobile = result.matches;
      if (this.isMobile) {
        this.isExpanded = false; // Close sidebar on mobile
      }
    });
  }
  
}
