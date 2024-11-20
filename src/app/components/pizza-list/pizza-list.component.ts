import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Pizza } from '../../../models/pizza.model';

@Component({
  selector: 'app-pizza-list',
  standalone: true,
  imports: [],
  templateUrl: './pizza-list.component.html',
  styleUrl: './pizza-list.component.css'
})
export class PizzaListComponent {
  @Input() pizzas: Pizza[] = [];
  @Output() deletePizzaEvent = new EventEmitter<number>();

  deletePizza(pizzaId: number) {
    this.deletePizzaEvent.emit(pizzaId);
  }
}
