import * as Curation from '../actions/curation.actions';
import { ICuration } from './../types/curation.types';

export interface IState {
    complete: boolean
    loading: boolean
    curations: Array<ICuration>
}
  
const initialState: IState = {
    complete: false,
    loading: false,
    curations: []
}
 
export function curationReducer(state = initialState, action: Curation.Actions): IState {
  switch (action.type) {
    case Curation.CURATION_LOADING:
        return Object.assign({}, state, {
            loading: true
        });

    case Curation.CURATION_COMPLETE: {
        const curationList: Array<ICuration> = action.payload;
        return {
            complete: true,
            loading: false,
            curations: curationList
        }
    }
 
    default:
      return state;
  }
}