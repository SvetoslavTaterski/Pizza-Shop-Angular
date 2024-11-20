import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterPizzasComponent } from './filter-pizzas.component';

describe('FilterPizzasComponent', () => {
  let component: FilterPizzasComponent;
  let fixture: ComponentFixture<FilterPizzasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FilterPizzasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilterPizzasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
