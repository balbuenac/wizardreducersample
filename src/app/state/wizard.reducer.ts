import { Action } from '@ngrx/store';

export function wizardReducer(state: string = '', action: Action) {

    switch (action.type) {
			case 'DEFINE':
			  state = 'Define Step State'
				return state
			case 'CONFIRM':
		  	state = 'Confirm Step State'
				return state
			case 'REVIEW':
			  state = 'Review Step State'
				return state
			default:
				return state;
	  }

}