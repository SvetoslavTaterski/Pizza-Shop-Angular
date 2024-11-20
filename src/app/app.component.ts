import { RouterOutlet } from '@angular/router';
import { Component } from '@angular/core';
import { Pizza } from '../models/pizza.model';
import { HeaderComponent } from "./components/header/header.component";
import { AddPizzaComponent } from "./components/add-pizza/add-pizza.component";
import { FilterPizzasComponent } from "./components/filter-pizzas/filter-pizzas.component";
import { PizzaListComponent } from "./components/pizza-list/pizza-list.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, AddPizzaComponent, FilterPizzasComponent, PizzaListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Pizza-Shop';
  
  pizzas: Pizza[] = [
    { id: 1, name: 'Margherita', image: 'link-to-image', description: 'Classic Cheese Pizza' },
    { id: 2, name: 'Pepperoni', image: 'link-to-image', description: 'Pepperoni Pizza' },
  ];

  addPizza(newPizza: Pizza) {
    this.pizzas.push({...newPizza, id: this.pizzas.length + 1});
  }

  deletePizza(pizzaId: number) {
    this.pizzas = this.pizzas.filter(pizza => pizza.id !== pizzaId);
  }

  filterPizzas(criteria: string) {
    this.pizzas = this.pizzas.filter(pizza => pizza.name.toLowerCase().includes(criteria.toLowerCase()));
  }
}
