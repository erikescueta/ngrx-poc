import { trigger, transition, state, style, animate } from '@angular/animations';
export const LoaderAnimation =
  trigger('loaderAnimation', [
    state('false', style({
      display: 'none',
      opacity: 0
    })),
    state('true', style({
      display: 'flex',
      opacity: 1
    })),
    transition('false => true', [
        animate('0.3s ease-in')
    ]),
    transition('true => false', [
      animate('0.3s ease-out')
    ])
  ]);
