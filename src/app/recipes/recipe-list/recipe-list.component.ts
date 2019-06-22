import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('A test recipe', 'This is simply a test recipe',
     'https://cdn-image.myrecipes.com/sites/default/files/styles/4_3_horizontal_-_1200x900/public/mrtrending0475.jpg?itok=ULkGk3Pn'),
     new Recipe('A test recipe2', 'This is simply a test recipe2',
     'https://pinchofyum.com/wp-content/uploads/Moroccan-Chickpea-Bowls-Recipe.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }
  recipeToDisplay: Recipe;

  onRecipeSelected(recipe: Recipe) {
    // this.recipes.push(recipe);
    console.log('onRecipeEmitted reached..name: ' + recipe.name);
    this.recipeToDisplay = recipe;
    this.recipeWasSelected.emit(recipe);
    console.log('recipeToDisplay setted up, name: ' + this.recipeToDisplay.name);
  }
}
