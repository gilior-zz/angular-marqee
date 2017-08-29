import {
    trigger,
    state,
    style,
    animate,
    transition,
    AnimationMetadata,
    AnimationTransitionMetadata,
    AnimationStyleMetadata,
    AnimationStateMetadata,
    AnimationTriggerMetadata
} from '@angular/animations';
import { AnimationEntryMetadata } from "@angular/core";

declare var marqueeAnimationDefs;
export function marqueeAnimation(): AnimationTriggerMetadata[] {
    let time = +marqueeAnimationDefs['time'] || 1000;
    let rtl = marqueeAnimationDefs['rtl'] == 'true' || false;
    console.log(`time ${time}`);
    console.log(`rtl ${rtl}`);
    let falseAnimationStyleMetadata: AnimationStyleMetadata = style({

        transform: rtl ? 'translateX(100%)' : 'translateX(0)'

    });
    let falseAnimationStateMetadata: AnimationStateMetadata = state('0', falseAnimationStyleMetadata);

    let trueAnimationStyleMetadata: AnimationStyleMetadata = style({

        // transform: 'translateX(100%)'
    });
    let trueAnimationStateMetadata: AnimationStateMetadata = state('1', trueAnimationStyleMetadata);

    let marqueeAnimationMetadata: AnimationMetadata[] = [
        falseAnimationStateMetadata,
        trueAnimationStateMetadata,
        transition('0 => 1', animate(time, style({
            transform: rtl ? 'translateX(-100%)' : 'translateX(100%)'
        }))),

    ]

    let marqueeAnimation2: AnimationTriggerMetadata[] =
        [
            trigger('marquee', marqueeAnimationMetadata)

        ];
    return marqueeAnimation2;

}







