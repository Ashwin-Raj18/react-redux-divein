import { combineReducers } from 'redux';
import postReducer from './postReducer';

export default combineReducers({
	letter : postReducer
});
