import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Store, select } from '@ngrx/store';
import * as CurationReducer from '../../reducers/curation.reducer'
import * as CurationActions from '../../actions/curation.actions'
import { CurationListService } from './curation-list.service';
import { ICuration } from '../../types/curation.types';

@Component({
    selector: 'curation-list',
    templateUrl: 'curation-list.component.html',
    styleUrls: ['./curation-list.component.scss']
})

export class CurationListComponent implements OnInit {
    curationList$: Observable<CurationReducer.IState>
    curationActionSubscription: Subscription
    curationList: Array<ICuration>

    constructor(
        private store: Store<CurationReducer.IState>,
        private curationListService: CurationListService
    ) { 
        this.curationList$ = this.store.pipe(select('curation'))
        this._subs()
    }

    ngOnInit() {
        this._initializeInstance()
        // request load curation list
        this.store.dispatch(new CurationActions.CurationLoadAction())
    }

    ngOnDestroy(): void {
        if (this.curationActionSubscription) {
            this.curationActionSubscription.unsubscribe()
        }
    }

    private _initializeInstance() {
        // initialize all instance here.
        this.curationList = []
    }
    
    private _subs() {
        // subscribe Observables
        this.curationActionSubscription =  this.curationList$.subscribe((curationResponse: CurationReducer.IState) => {
          // load complete.
          if (curationResponse.complete) {
            this.curationList = curationResponse.curations
          }
        })
    }
}