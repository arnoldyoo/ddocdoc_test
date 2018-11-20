import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import * as CurationReducer from '../../reducers/curation.reducer'

@Component({
    selector: 'curation-list',
    templateUrl: 'curation-list.component.html',
    styleUrls: ['./curation-list.component.scss']
})

export class CurationListComponent implements OnInit {
    curationList$: Observable<CurationReducer.IState>
    constructor(
        private store: Store<CurationReducer.IState>
    ) { 
        this.curationList$ = this.store.pipe(select('curation'))
        this._subs()
    }

    ngOnInit() { 

    }
    
    private _subs() {
        this.curationList$.subscribe((curationResponse: CurationReducer.IState) => {
          // console.log(curationResponse.)
        })
    }
}