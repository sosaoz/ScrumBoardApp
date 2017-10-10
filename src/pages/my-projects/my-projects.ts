import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';

//Pages
import { NewPage } from '../new/new';
import { DetailsPage } from '../details/details';

@Component({
  selector: 'app-my-projects',
  templateUrl: 'my-projects.html',
})
export class MyProjectsPage implements OnInit {
  constructor( private navCtrl:NavController ) {  }

  ngOnInit() {}

  //Funion que se encarga de redireccionar a la pagina New
  new(){
    this.navCtrl.push( NewPage );
  }

  //Funion que se encarga de redireccionar a la pagina Detalles
  details(){
    this.navCtrl.push( DetailsPage );
  }
}
