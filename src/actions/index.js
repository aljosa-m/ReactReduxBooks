export function selectBook(book) {
  // selectBok is an ActionCreator and needs to create an action,
  // an object with a type property.
  return {
    type: 'BOOK_SELECTED',
    payload: book
  };
}
