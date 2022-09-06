import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessFiguresSectionComponent } from './business-figures-section.component';

describe('BusinessFiguresSectionComponent', () => {
  let component: BusinessFiguresSectionComponent;
  let fixture: ComponentFixture<BusinessFiguresSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BusinessFiguresSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinessFiguresSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
