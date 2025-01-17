import { FETCH_POSTS, NEW_POST } from '../actions/types';

export const initialState = {
	items : [],
	item  : {}
};

export default function (state = initialState, action) {
	switch (action.type) {
		case FETCH_POSTS:
			return {
				...state,
				items : action.payload
			};
		case NEW_POST:
			return {
				...state,
				// item  : action.payload,
				items : [ action.payload, ...state.items ]
			};
		default:
			return state;
	}
}
