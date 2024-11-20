import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Pizza } from '../../../models/pizza.model';

@Component({
  selector: 'app-pizza-card',
  standalone: true,
  imports: [],
  templateUrl: './pizza-card.component.html',
  styleUrl: './pizza-card.component.css'
})
export class PizzaCardComponent {
  //Remove the ! after creating the logic.
  @Input() pizza!: Pizza;
  @Output() deletePizzaEvent = new EventEmitter<number>();

  deletePizza() {
    this.deletePizzaEvent.emit(this.pizza.id);
  }
}
