import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';



import { AngularMarqueeModule } from './angular-marquee/angular-marquee.module';


@NgModule({
  declarations: [
    AppComponent,


  ],
  imports: [
    BrowserModule
    , AngularMarqueeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
