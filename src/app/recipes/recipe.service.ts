import { Recipe } from './recipe.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Vienna Schnitzel',
      'A super-tasty Schnitzel - just awesome!',
      'https://www.viennawurstelstand.com/wp-content/uploads/2017/03/viennawurstelstand_bestschnitzel_header2.jpg',
      [
        new Ingredient('Meat', 1),
        new Ingredient('French Fries', 20),
      ]),
    new Recipe(
      'Big Burger',
      'The Tastiest Burger in City',
      'https://images.mentalfloss.com/sites/default/files/styles/mf_image_16x9/public/burger4_0.png?itok=bu8uibsO&resize=1100x1100',
      [
        new Ingredient('Buns', 3),
        new Ingredient('Meat', 1),
      ])
  ];

  constructor(private slcService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slcService.addIngredients(ingredients);
  }
}
