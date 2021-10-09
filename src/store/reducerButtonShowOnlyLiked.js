const localState = {
  showOnlyLiked: false,
};

const SHOW_ONLY_LIKED = 'SHOW_ONLY_LIKED';

export const reducerButtonShowOnlyLiked = (state = localState, action) => {
  switch (action.type) {
    case SHOW_ONLY_LIKED:
      return { ...state, showOnlyLiked: !state.showOnlyLiked };
    default:
      return state;
  }
};

export const createActionShowOnlyLiked = () => {
  return {
    type: SHOW_ONLY_LIKED,
  };
};
