import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  recipeClicked = false;
  shoppinglistClicked = false;
  elementClicked = 'recipes';
  onClickedElement(elementClicked: string) {

    this.elementClicked = elementClicked;
    // console.log('received emitted click: some element clicked')
    // if (elementClicked === 'recipesClicked') {
    //   console.log('received emitted click: recipeClicked')
    //   this.elementClicked = 'recipes';
    // }

    // else if (elementClicked === 'shoppinglistClicked') {

    //   console.log('received emitted click: shoppinglistClicked')
    //   this.elementClicked = 'shopping-list';
    // }
  }
  onClickedRecipes(elementClicked: string) {

    console.log('received emitted click: on click recipes')
    if (elementClicked === 'recipesClicked') {
      this.recipeClicked = true;
    }
  }
  onClickedShoppoingList(elementClicked: string) {
    console.log('received emitted click: on click shoppinglist')
    if (elementClicked === 'shoppinglistClicked') {
      this.shoppinglistClicked = true;
    }
  }
}
