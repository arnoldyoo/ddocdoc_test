import { Action } from '@ngrx/store';
import { ICuration } from '../types/curation.types';

export const CURATION_LOADING = '[Curation Component] Curation_Loading'
export const CURATION_COMPLETE = '[Curation Component] Curation_complete'

export class CurationLoadingAction implements Action {
  readonly type = CURATION_LOADING
}

export class CurationCompleteAction implements Action {
  readonly type = CURATION_COMPLETE

  constructor(public payload: Array<ICuration>) { }
}

export type Actions = CurationLoadingAction | CurationCompleteAction



  