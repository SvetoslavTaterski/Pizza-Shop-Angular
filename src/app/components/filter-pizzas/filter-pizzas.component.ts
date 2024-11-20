import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-filter-pizzas',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './filter-pizzas.component.html',
  styleUrl: './filter-pizzas.component.css',
})
export class FilterPizzasComponent {
  criteria: string = '';
  @Output() filterCriteriaEvent = new EventEmitter<string>();

  filterPizzas() {
    this.filterCriteriaEvent.emit(this.criteria);
  }
}
