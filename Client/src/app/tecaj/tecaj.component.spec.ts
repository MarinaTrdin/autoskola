import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TecajComponent } from './tecaj.component';

describe('DjelatnikComponent', () => {
  let component: TecajComponent;
  let fixture: ComponentFixture<TecajComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TecajComponent]
    });
    fixture = TestBed.createComponent(TecajComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
