import { Action } from '@ngrx/store';
import { ICuration } from '../types/curation.types';

export const CURATION_LOAD = '[Curation Component] Curation_Load'
export const CURATION_COMPLETE = '[Curation Component] Curation_complete'

export class CurationLoadAction implements Action {
  readonly type = CURATION_LOAD
}

export class CurationCompleteAction implements Action {
  readonly type = CURATION_COMPLETE

  constructor(public payload: Array<ICuration>) { }
}

export type Actions = CurationLoadAction | CurationCompleteAction



  