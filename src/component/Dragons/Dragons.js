import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import DragonsCard from './MyDragon';
import { getDragons } from '../../redux/Dragons/dragons';
import './Dragons.css';

const Dragon = () => {
  const dragons = useSelector((state) => state.dragons.DragonsData);
  const dispatch = useDispatch();

  useEffect(() => {
    if (dragons.length === 0) {
      dispatch(getDragons());
    }
  }, []);
  /*   const newdragons = dragons.DragonsData; */

  const cards = dragons.length > 0
  && dragons.map((dragon) => <DragonsCard key={dragon.id} dragon={dragon} />);

  return <div className="dragon-container">{cards}</div>;
};

export default Dragon;
