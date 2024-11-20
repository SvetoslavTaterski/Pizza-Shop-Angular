import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Pizza } from '../../../models/pizza.model';
import { PizzaCardComponent } from "../pizza-card/pizza-card.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pizza-list',
  standalone: true,
  imports: [PizzaCardComponent, CommonModule],
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
