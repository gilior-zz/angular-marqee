import { marqueeAnimation } from './marquee-anim';

import { Component, OnInit, ChangeDetectorRef, Input } from '@angular/core';
declare var marqueeAnimationDefs;
@Component({
  selector: 'mqe-angular-marquee',
  templateUrl: './angular-marquee.component.html',
  styleUrls: ['./angular-marquee.component.scss']
  , animations: [marqueeAnimation()]
})
export class AngularMarqueeComponent implements OnInit {
  animTime: number = +marqueeAnimationDefs['time'] || 1000;
  state: boolean = false;
  time: Date = new Date();
  message: string;
  constructor(private changeDetectorRef: ChangeDetectorRef) {



  }

  @Input() messages: Array<string>;
  @Input() styleDefintions: {};

  ngOnInit() {
    let i = 0;
    setInterval(() => {
      this.state = false;
      this.changeDetectorRef.detectChanges();
      this.state = true;
      this.changeDetectorRef.detectChanges();
      // console.log(`setInterval`);
      this.time = new Date();
      this.message = this.messages[i++ % this.messages.length];


    }, this.animTime)
  }

}
