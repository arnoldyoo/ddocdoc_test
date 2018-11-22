import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http'

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { curationReducer } from './reducers/curation.reducer';
import { CurationListComponent } from './components/curation-list/curation-list.component';
import { CurationListService } from './components/curation-list/curation-list.service';
import { EffectsModule } from '@ngrx/effects';
import { CurationEffects } from './effets/curation.effets';

@NgModule({
  declarations: [
    AppComponent,
    CurationListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    StoreModule.forRoot({ curation: curationReducer }),
    EffectsModule.forRoot([CurationEffects])
  ],
  providers: [CurationListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
