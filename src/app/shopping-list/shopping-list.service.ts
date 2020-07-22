import { Injectable, EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Injectable()
export class ShoppingListService {

  private ingredients: Ingredient[] = [
    new Ingredient('apple', 3),
    new Ingredient('potatoes', 2),

  ];
  ingredientWasAdded = new EventEmitter<Ingredient>()

  constructor() { }

  getIngredients() {
    return this.ingredients.slice();
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientWasAdded.emit(ingredient);
  }

}
