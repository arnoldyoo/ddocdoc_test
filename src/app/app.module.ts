import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http'

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { curationReducer } from './reducers/curation.reducer';
import { CurationListComponent } from './components/curation-list/curation-list.component';
import { CurationListService } from './components/curation-list/curation-list.service';

@NgModule({
  declarations: [
    AppComponent,
    CurationListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    StoreModule.forRoot({ curation: curationReducer })
  ],
  providers: [CurationListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
