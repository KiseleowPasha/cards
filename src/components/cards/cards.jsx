import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Card } from '../card/card';
import { fetchCards } from '../../store/async';
import { useSelector } from 'react-redux';
import './cards.css';
import { createActionShowOnlyLiked } from '../../store/reducerButtonShowOnlyLiked';

export const Cards = () => {
  const dispatch = useDispatch();
  const cards = useSelector((state) => state.cards.cards);
  const loaded = useSelector((state) => state.cards.loaded);
  const showOnlyLiked = useSelector(
    (state) => state.showOnlyLiked.showOnlyLiked
  );
  const currentCards = showOnlyLiked
    ? cards.filter((card) => card.liked === true)
    : cards;

  useEffect(() => {
    dispatch(fetchCards());
  }, []);

  const showOnlyLikedHandle = () => {
    dispatch(createActionShowOnlyLiked());
  };

  return (
    <>
      {loaded ? (
        <>
          <button
            className={
              showOnlyLiked
                ? 'button-show-cards-with-like active-button'
                : 'button-show-cards-with-like'
            }
            onClick={showOnlyLikedHandle}
          >
            Show only cards with like
          </button>
          <div className='cards'>
            {currentCards.map((card) => (
              <Card card={card} key={card.id} />
            ))}
          </div>
        </>
      ) : (
        <h1 className='loading'>Loading...</h1>
      )}
    </>
  );
};
