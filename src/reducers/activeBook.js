import { BOOK_SELECTED } from 'actions/types';

export default (state = null, action) => {
  switch (action.type) {
    case BOOK_SELECTED:
      return action.payload;
  }
  return state;
};
