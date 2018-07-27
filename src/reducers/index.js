import { combineReducers } from 'redux';
import activeBook from 'reducers/activeBook';
import books from 'reducers/books';

const rootReducer = combineReducers({
  books,
  activeBook
});

export default rootReducer;
