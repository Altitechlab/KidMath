import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { Addition } from '../pages/addition/addition';
import { Subtraction } from '../pages/subtraction/subtraction';
import { Mutiplication } from '../pages/mutiplication/mutiplication';
import { Division } from '../pages/division/division';
import { Levelscreen } from '../pages/levelscreen/levelscreen';

@NgModule({
  declarations: [
    MyApp,
      HomePage,
      Addition,
      Subtraction,
      Mutiplication,
      Division,
      Levelscreen
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
      HomePage,
      Addition,
      Subtraction,
      Mutiplication,
      Division,
      Levelscreen
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
