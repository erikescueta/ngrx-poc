import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReduxComponent } from './redux/redux.component';
import { SubscribeComponent } from './subscribe/subscribe.component';

const routes: Routes = [
    {
        path: '',
        children: [
            {
                path: 'redux',
                component: ReduxComponent
            },
            {
                path: 'subscribe',
                component: SubscribeComponent
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [ RouterModule ]
})
export class ListRoutingModule { }
