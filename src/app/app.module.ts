import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { curationReducer } from './reducers/curation.reducer';
import { CurationListComponent } from './components/curation-list/curation-list.component';

@NgModule({
  declarations: [
    AppComponent,
    CurationListComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({ curation: curationReducer })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
