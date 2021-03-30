import { combineReducers } from 'redux';
import locationReducer from './reducer-location';

const rootReducer = combineReducers({ location: locationReducer });

export default rootReducer;
