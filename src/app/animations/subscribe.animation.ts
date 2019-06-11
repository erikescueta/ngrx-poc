import { trigger, transition, state, style, animate } from '@angular/animations';
export const SubscribeAnimation =[
  trigger('loadResults', [
    state('init', style({
      position: 'relative',
      left: '-25px',
      opacity: 0
    })),
    state('end', style({
      left: 0,
      opacity: 1
    })),
    transition('init => end', [
        animate('0.6s ease-in-out')
    ])
  ]),
  trigger('unloadResults', [
    state('init', style({
      position: 'relative',
      left: 0,
      opacity: 1,
    })),
    state('end', style({
      left: '25px',
      opacity: 0
    })),
    transition('init => end', [
        animate('0.6s ease-in-out')
    ])
  ]),
  trigger('loadIndex', [
    state('init', style({
      position: 'absolute',
      left: '-25px',
      opacity: 0
    })),
    state('end', style({
      left: 0,
      opacity: 1
    })),
    transition('init => end', [
        animate('0.6s ease-in-out')
    ])
  ]),
  trigger('unloadIndex', [
    state('init', style({
      position: 'absolute',
      left: 0,
      opacity: 1,
    })),
    state('end', style({
      left: '25px',
      opacity: 0
    })),
    transition('init => end', [
        animate('0.6s ease-in-out')
    ])
  ])
]
