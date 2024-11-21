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
    { id: 1, name: 'Margherita', image: 'assets/images/the-best-homemade-margherita-pizza-1-4-500x500.jpg', description: 'Classic Cheese Pizza' },
    { id: 2, name: 'Pepperoni', image: 'assets/images/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2019__09__easy-pepperoni-pizza-lead-3-8f256746d649404baa36a44.jpg', description: 'Pepperoni Pizza' },
  ];
  
  filteredPizzas: Pizza[] = [...this.pizzas];

  addPizza(newPizza: Pizza) {
    this.pizzas.push({...newPizza, id: this.pizzas.length + 1});
    this.filteredPizzas = [...this.pizzas];
  }

  deletePizza(pizzaId: number) {
    this.pizzas = this.pizzas.filter(pizza => pizza.id !== pizzaId);
    this.filteredPizzas = this.filteredPizzas.filter(pizza => pizza.id !== pizzaId);
  }

  filterPizzas(criteria: string) {
    if (criteria) {
      this.filteredPizzas = this.pizzas.filter(pizza => pizza.name.toLowerCase().includes(criteria.toLowerCase()));
    } else {
      this.filteredPizzas = [...this.pizzas];
    }
  }
}
