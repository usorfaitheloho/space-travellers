import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import DragonsCard from './MyDragon';
import { getDragons } from '../../redux/Dragons/dragons';
import './rocket.css';

const Rocket = () => {
  const rockets = useSelector((state) => state.rockets);
  const dispatch = useDispatch();

  useEffect(() => {
    if (rockets.rocketsData.length === 0) {
      dispatch(getDragons());
    }
  }, []);
  const newRockets = rockets.rocketsData;

  const cards = newRockets.length > 0 && newRockets.map((rocket) => (
    <DragonsCard
      key={rocket.id}
      rocket={rocket}
    />
  ));

  return (
    <div className="rocket-container">
      {cards}
    </div>
  );
};

export default Rocket;
