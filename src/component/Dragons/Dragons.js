import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import DragonsCard from './MyDragon';
import { getDragons } from '../../redux/Dragons/dragons';
import './Dragons.css';

const dragon = () => {
  const dragons = useSelector((state) => state.dragons);
  const dispatch = useDispatch();

  useEffect(() => {
    if (dragons.dragonsData.length === 0) {
      dispatch(getDragons());
    }
  }, []);
  const newdragons = dragons.dragonsData;

  const cards = newdragons.length > 0 && newdragons.map((dragon) => (
    <DragonsCard
      key={dragon.id}
      dragon={dragon}
    />
  ));

  return (
    <div className="dragon-container">
      {cards}
    </div>
  );
};

export default dragon;
