import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() selectedSection = new EventEmitter<string>()
  constructor() { }

  ngOnInit(): void {
  }

  onRecipesSelect(): void {
    this.selectedSection.emit('recipes')
  }

  onShoppingListSelect(): void {
    this.selectedSection.emit('shopping-list')
  }

}
