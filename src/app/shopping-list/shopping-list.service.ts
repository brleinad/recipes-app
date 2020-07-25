import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';


import { Ingredient } from '../shared/ingredient.model';


@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {

  private ingredients: Ingredient[] = [
    new Ingredient('apple', 3),
    new Ingredient('potatoes', 2),

  ];
  ingredientsUpdated = new Subject<Ingredient[]>()

  constructor() { }

  getIngredients() {
    return this.ingredients.slice();
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientsUpdated.next(this.ingredients);
  }

  addManyIngredients(ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients);
    this.ingredientsUpdated.next(this.ingredients);
  }

}
