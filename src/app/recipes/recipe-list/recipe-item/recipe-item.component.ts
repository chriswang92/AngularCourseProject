import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  // ngOnInit(): void {
  //   throw new Error("Method not implemented.");
  // }

  @Input() recipeItem: Recipe;
  @Output() recipeItemClicked = new EventEmitter<Recipe>();
    // name: string,
    // description: string,
    // imagePath: string}>();

  constructor() { }

  ngOnInit() {
  }

  onClickRecipeItem(recipeItem: Recipe) {
    console.log('onClickRecipeItem clicked, item: ' + recipeItem.description);
    this.recipeItemClicked.emit(recipeItem);
  }
}
