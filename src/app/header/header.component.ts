import { Component, Output, EventEmitter } from '@angular/core';

@Component({
    'selector': 'app-header',
    'templateUrl': './header.component.html',
    'styleUrls': ['./header.component.css']
})
export class HeaderComponent {
    @Output() elementClicked = new EventEmitter<string>();
    collapsed = true;
    onClickRecipes() {
        console.log('on click recipes')
        this.elementClicked.emit("recipesClicked");
    }
    onClickShoppingList() {
        console.log('on click shoppinglist')
        this.elementClicked.emit("shoppinglistClicked");
    }
}