

import { Component, ChangeDetectorRef } from '@angular/core';


@Component({
  selector: 'mqe-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
 


})
export class AppComponent {
  
  title = 'mqe';
  state: boolean = false;
  time: Date = new Date()
  constructor(private changeDetectorRef: ChangeDetectorRef) {

    setInterval(() => {
      this.time = new Date();
    }, 3000)
  }
}
