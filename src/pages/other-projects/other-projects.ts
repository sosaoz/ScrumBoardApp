import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';

//Pages
import { SearchPage } from '../search/search';
import { DetailsPage } from '../details/details';

@Component({
  selector: 'app-other-projects',
  templateUrl: 'other-projects.html',
})
export class OtherProjectsPage implements OnInit {
  constructor( private navCtrl:NavController ) {  }

  ngOnInit() {}

  //Funion que se encarga de redireccionar a la pagina add
  add(){
    this.navCtrl.push( SearchPage );
  }

  //Funion que se encarga de redireccionar a la pagina Detalles
  details(){
    this.navCtrl.push( DetailsPage );
  }
}
