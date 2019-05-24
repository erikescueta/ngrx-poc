import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ListRoutingModule } from './list.routing.module';
import { ReduxComponent } from './redux/redux.component';
import { SubscribeComponent } from './subscribe/subscribe.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    ReduxComponent,
    SubscribeComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    ListRoutingModule
  ]
})
export class ListModule { }
