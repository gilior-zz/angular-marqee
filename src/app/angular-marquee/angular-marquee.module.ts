import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularMarqueeComponent } from './angular-marquee.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    CommonModule
    , BrowserAnimationsModule
  ],
  declarations: [
    AngularMarqueeComponent
  ],
  exports: [
    AngularMarqueeComponent
    
  ]
})
export class AngularMarqueeModule { }
