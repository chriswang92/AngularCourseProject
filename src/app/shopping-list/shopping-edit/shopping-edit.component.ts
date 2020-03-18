import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput', { static: false }) ingredientName: ElementRef;
  @ViewChild('amountInput', { static: false }) ingredientAmount: ElementRef;
  constructor(private shoppinglistService: ShoppingListService) { }

  ngOnInit() {
  }
  onAddIngredient() {
    const ingName = this.ingredientName.nativeElement.value;
    const ingAmount = this.ingredientAmount.nativeElement.value;
    const ingredient = new Ingredient(ingName, ingAmount);
    console.log('onAddIngredient reached, name='+ingName+', amount='+ingAmount);
    this.shoppinglistService.addIngredient(ingredient);
  }
  onDeleteIngredient() {
    const ingName = this.ingredientName.nativeElement.value;
    const ingAmount = this.ingredientAmount.nativeElement.value;
    const ingredient = new Ingredient(ingName, ingAmount);
    console.log('onDeleteIngredient reached, name='+ingName+', amount='+ingAmount);
    // this.ingredientEmitter.emit(ingredient);
  }
}
