import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

//Projects pages
import { MyProjectsPage } from '../pages/my-projects/my-projects';
import { OtherProjectsPage } from '../pages/other-projects/other-projects';
import { UsernamePage } from '../pages/username/username';
import { NewPage } from '../pages/new/new';
import { DetailsPage } from '../pages/details/details';
import { SearchPage } from '../pages/search/search';

//Porjects Tabs
import { TabsPage } from '../pages/tabs/tabs';

//Service
import { ListaProyectService } from './services/lista-proyectos.service';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    UsernamePage,
    NewPage,
    DetailsPage,
    MyProjectsPage,
    OtherProjectsPage,
    SearchPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    UsernamePage,
    NewPage,
    DetailsPage,
    MyProjectsPage,
    OtherProjectsPage,
    SearchPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    ListaProyectService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
