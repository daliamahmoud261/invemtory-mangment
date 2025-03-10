import { TestBed } from '@angular/core/testing';
import { ToasterComponent } from './toaster.component';
import { MAT_SNACK_BAR_DATA, MatSnackBarRef } from '@angular/material/snack-bar';

describe('ToasterComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ToasterComponent],
      providers: [
        { provide: MAT_SNACK_BAR_DATA, useValue: { message: 'Test Message' } },
        { provide: MatSnackBarRef, useValue: {} }
      ]
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(ToasterComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});
