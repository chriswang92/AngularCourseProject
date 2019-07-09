import { Recipe } from './recipe.model';
import { EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();
    
    private recipes: Recipe[] = [
        new Recipe('A test recipe', 'This is simply a test recipe',
         'https://cdn-image.myrecipes.com/sites/default/files/styles/4_3_horizontal_-_1200x900/public/mrtrending0475.jpg?itok=ULkGk3Pn',
         [
             new Ingredient('Meat', 1),
             new Ingredient('French Fries', 20)
         ]),
        new Recipe('A test recipe2', 'This is simply a test recipe2',
        'https://pinchofyum.com/wp-content/uploads/Moroccan-Chickpea-Bowls-Recipe.jpg',
        [
            new Ingredient('Bread', 2),
            new Ingredient('Tomato', 22)
        ])
    ];

    getRecipes() {
        return this.recipes.slice(); // return a copy of this array
    }
}