import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';
import { EffectsModule } from '@ngrx/effects';

import { ArticlesEffects } from './effects/articles.effects';
import { ArticlesService } from './services/articles.service';

import { TaxonomiesEffects } from './effects/taxonomies.effects';
import { TaxonomiesService } from './services/taxonomies.service';

import { HomeComponent } from './modules/home/home.component';
import { ErrorComponent} from './modules/error/error.component';
import { SharedModule } from './modules/shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
    }),
    EffectsModule.forRoot([
      ArticlesEffects,
      TaxonomiesEffects
    ])
  ],
  providers: [
    ArticlesService,
    TaxonomiesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }