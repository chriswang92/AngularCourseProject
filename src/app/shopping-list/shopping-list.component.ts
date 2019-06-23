import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] =[
    new Ingredient('Apples', 5),
    new Ingredient('Tomato', 6)
  ];

  constructor() { }

  ngOnInit() {
  }

  // addedIngredient: Ingredient;
  // ingredients: Ingredient[] = [];
  // onAddIngredient(ingredientName: string, ingredientAmount: number) {
  //   console.log("before add, size="+this.ingredients.length)
  //   this.ingredients.push(new Ingredient(ingredientName, ingredientAmount));
  // }
  onIngredientEditted(ingredientAdded: Ingredient) {

    // Delete giving amount on existing ingredient
    // if (this.ingredients.find(new function sameName(element, index, this.ingredients) {element.name === ingredientAdded.name})) {
    if (this.ingredients.some(e => e.name === ingredientAdded.name && e.amount >= ingredientAdded.amount)) {  
      console.log('Deleting '+ingredientAdded.amount + ' for ' + ingredientAdded.name);
      var element = this.ingredients.filter(e => e.name === ingredientAdded.name)[0];
      element.amount -= ingredientAdded.amount;
    } else {
      console.log("before add, size = "+this.ingredients.length)
      console.log('Insert element with name: ' + ingredientAdded.name + ' and amount: ' + ingredientAdded.amount);
      this.ingredients.push(ingredientAdded);
      console.log("after add, size = "+this.ingredients.length)
    }
  }
}
