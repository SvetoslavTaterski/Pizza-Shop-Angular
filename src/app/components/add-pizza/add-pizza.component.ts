import { Component, EventEmitter, Output } from '@angular/core';
import { Pizza } from '../../../models/pizza.model';

@Component({
  selector: 'app-add-pizza',
  standalone: true,
  imports: [],
  templateUrl: './add-pizza.component.html',
  styleUrl: './add-pizza.component.css'
})
export class AddPizzaComponent {

  newPizza: Pizza = { id: 0, name: '', image: '', description: '' };
  @Output() newPizzaEvent = new EventEmitter<Pizza>();

  addPizza() {
    this.newPizzaEvent.emit({...this.newPizza});
    this.newPizza = { id: 0, name: '', image: '', description: '' }; // Reset form
  }
}