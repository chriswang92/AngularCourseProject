import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {

  selectedRecipe: Recipe;

  constructor() { }

  ngOnInit() {
  }

  recipeToDisplay: Recipe;

  onRecipeEmitted(recipe: Recipe) {
    // this.recipes.push(recipe);
    console.log('onRecipeEmitted reached..name: ' + recipe.name);
    this.recipeToDisplay = recipe;
    console.log('recipeToDisplay setted up, name: ' + this.recipeToDisplay.name);
  }
}
