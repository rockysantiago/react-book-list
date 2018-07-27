import { BOOK_SELECTED } from 'actions/types';

export const selectBook = book => {
  return { type: BOOK_SELECTED, payload: book };
};
