import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { RecipeService } from '../recipes/recipe.service';

@Injectable({ providedIn: 'root' })
export class DataStorageService {
  constructor(private http: HttpClient, private recipeService: RecipeService) {}

  storageRecipes() {
    const recipes = this.recipeService.getRecipes();
    this.http.put(
      'https://ng-recipe-book-3e4b5.firebaseio.com/recipes.json',
      recipes
      )
      .subscribe(response => {
      console.log(response);
    });
  }
}
