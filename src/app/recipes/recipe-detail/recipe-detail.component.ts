import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { Recipe } from '../recipe.model';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../../shopping-list/shopping-list.service';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  recipe: Recipe;
  id: number;

  constructor(private shoppingListService: ShoppingListService,
              private recipeService: RecipeService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.params['id'];
    this.recipe = this.recipeService.getRecipe(id);

    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id']
        this.recipe = this.recipeService.getRecipe(this.id);
      }
    )
  }

  onAddToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addManyIngredients(ingredients);
  }

}
