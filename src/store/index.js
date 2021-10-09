import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import { reducerActionsWithCards } from './reducerActionsWithCards';
import { reducerButtonShowOnlyLiked } from './reducerButtonShowOnlyLiked';

const rootReducer = combineReducers({
  cards: reducerActionsWithCards,
  showOnlyLiked: reducerButtonShowOnlyLiked,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
