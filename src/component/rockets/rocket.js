import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import RocketCard from './rocketCard';
import { getRockets } from '../../redux/rockets/rockets';
import './rocket.css';

const Rocket = () => {
  const rockets = useSelector((state) => state.rockets);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRockets());
  }, []);

  const newRockets = rockets.rocketsData;

  const cards = newRockets.length > 0 && newRockets.map((rocket) => (
    <RocketCard
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
