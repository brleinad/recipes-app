import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'recipes-app';
  showRecipes: boolean = true;
  showShoppingList: boolean = false;

  onSectionSelected(selectedSection): void {
    this.showRecipes = false;
    this.showShoppingList = false;
    if (selectedSection === 'recipes') {
      this.showRecipes = true;
    } else if (selectedSection === 'shopping-list') {
      this.showShoppingList = true;
    }
  }
}
