import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import * as CurationActions from '../actions/curation.actions';
import { ICuration } from '../types/curation.types';
import { CurationListService } from './../components/curation-list/curation-list.service';
 
@Injectable()
export class CurationEffects {
  
    // Get All curation list
  @Effect()
  loadAllArticles$: Observable<Action> = this.actions$.pipe(
    ofType(CurationActions.CURATION_LOAD),
    mergeMap(() => 
      this.curationListService.getCurationList().pipe(
        map((curationList: Array<ICuration>) => new CurationActions.CurationCompleteAction(curationList)) 
      )
    )
  )

  constructor(
    private http: HttpClient, 
    private actions$: Actions,
    private curationListService:CurationListService
  ) {}
}