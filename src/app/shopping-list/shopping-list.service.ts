import { Ingredient } from '../shared/ingredient.model';

export class ShoppingListService {
    private ingredients: Ingredient[] =[
        new Ingredient('Apples', 5),
        new Ingredient('Tomato', 6)
    ];
    getIngredients() {
        return this.ingredients.slice();
    }
}