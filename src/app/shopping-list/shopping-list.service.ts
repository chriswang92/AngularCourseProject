import { Ingredient } from '../shared/ingredient.model';
import { EventEmitter } from '@angular/core';

export class ShoppingListService {
    ingredientsChanged = new EventEmitter<Ingredient[]>();
    private ingredients: Ingredient[] =[
        new Ingredient('Apples', 5),
        new Ingredient('Tomato', 6)
    ];
    
    getIngredients() {
        return this.ingredients.slice();
    }

    addIngredient(ingredient: Ingredient) {
        this.ingredients.push(ingredient);
        this.ingredientsChanged.emit(this.ingredients.slice());
        console.log('after add size='+this.ingredients.length);
    }

    addIngredients(ingredients: Ingredient[]) {
        // for (let ingredient of ingredients) {
        //     this.addIngredient(ingredient);
        // }
        this.ingredients.push(...ingredients); // ES6 spread operator: '...' makes an array to a list
        this.ingredientsChanged.emit(this.ingredients.slice());
    }
}