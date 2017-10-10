import { Component } from '@angular/core';


//Projects Pages
import { MyProjectsPage } from '../my-projects/my-projects';
import { OtherProjectsPage } from '../other-projects/other-projects';
import { UsernamePage } from '../username/username';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  //Declara a que Pagina redireccionara  con tabRoot
  tab1Root = MyProjectsPage;
  tab2Root = OtherProjectsPage;
  tab3Root = UsernamePage;


  constructor() {

  }
}
