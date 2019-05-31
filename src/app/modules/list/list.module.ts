import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
    ReactiveFormsModule,
    SharedModule,
    ListRoutingModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class ListModule { }
