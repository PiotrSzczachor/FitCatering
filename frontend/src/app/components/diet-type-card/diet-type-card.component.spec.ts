import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DietTypeCardComponent } from './diet-type-card.component';

describe('DietTypeCardComponent', () => {
  let component: DietTypeCardComponent;
  let fixture: ComponentFixture<DietTypeCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DietTypeCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DietTypeCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
