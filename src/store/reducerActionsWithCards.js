const localState = {
  cards: [],
  loaded: false,
};

const LOAD_CARDS = 'LOAD_CARDS';
const DELETE_CARD = 'DELETE_CARD';
const LIKE_CARD = 'LIKE_CARD';

export const reducerActionsWithCards = (state = localState, action) => {
  switch (action.type) {
    case LOAD_CARDS:
      return {
        ...state,
        cards: [...state.cards, ...action.payload.cards],
        loaded: action.payload.loaded,
      };
    case DELETE_CARD:
      return {
        ...state,
        cards: [...state.cards.filter((card) => card.id !== action.payload)],
      };
    case LIKE_CARD: {
      state.cards.find((card) => card.id === action.payload).liked =
        !state.cards.find((card) => card.id === action.payload).liked;
      return {
        ...state,
        cards: [...state.cards],
      };
    }
    default:
      return state;
  }
};

export const createActionLoadCards = (cards) => {
  return {
    type: LOAD_CARDS,
    payload: {
      cards: cards,
      loaded: true,
    },
  };
};

export const createActionDeleteCard = (id) => {
  return {
    type: DELETE_CARD,
    payload: id,
  };
};

export const createActionLikeCard = (id) => {
  return {
    type: LIKE_CARD,
    payload: id,
  };
};
