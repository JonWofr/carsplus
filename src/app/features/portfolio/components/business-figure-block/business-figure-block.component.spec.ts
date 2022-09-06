import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessFigureBlockComponent } from './business-figure-block.component';

describe('BusinessFigureBlockComponent', () => {
  let component: BusinessFigureBlockComponent;
  let fixture: ComponentFixture<BusinessFigureBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BusinessFigureBlockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinessFigureBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
