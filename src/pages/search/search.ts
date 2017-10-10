import { Component } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: 'search.html',
})

// Se encarga de la busqueda de proyectos
export class SearchPage {
  searchQuery: string = '';
  items: string[];

  constructor() {
    this.initializeItems();
  }

  initializeItems() {
    this.items = [
      'Amsterdam',
      'Bogota',
      'Caracas',
      'Cancun',

    ];
  }

  getItems(ev: any) {
    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the searchbar
    let val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }
}
