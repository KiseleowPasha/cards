import { createActionLoadCards } from './reducerActionsWithCards';

const url =
  'https://raw.githubusercontent.com/KiseleowPasha/test_JSON/master/cards.json';
export const fetchCards = () => {
  return function (dispatch) {
    fetch(url)
      .then((response) => response.json())
      .then((cards) => dispatch(createActionLoadCards(cards)));
  };
};
