import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DietsPanelComponent } from './diets-panel.component';

describe('DietsPanelComponent', () => {
  let component: DietsPanelComponent;
  let fixture: ComponentFixture<DietsPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DietsPanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DietsPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
