import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { combineReduce } from './reducer/root-reducer';

export const store = createStore(combineReduce, composeWithDevTools(applyMiddleware(thunk)));
