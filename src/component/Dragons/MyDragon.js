import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { reserveDragon } from '../../redux/Dragons/dragons';
import './Dragons.css';

const DragonsCard = ({ dragon }) => {
  const dispatch = useDispatch();

  const handleReservation = (id) => dispatch(reserveDragon(id));
  const { image } = dragon;
  return (
    <div className="dragon">
      <img className="dragon--image" src={image} alt={dragon.name} />
      <div className="dragon--desc">
        <h2 className="dragon--desc__title">{dragon.name}</h2>
        <p className="dragon--desc__info">
          {dragon.reserved && (
            <small className="reserved-badge">reserved</small>
          )}
          {dragon.desc}
        </p>
        <button
          type="button"
          className="dragon--desc__btn"
          onClick={() => handleReservation(dragon.id)}
        >
          {dragon.reserved ? 'Cancel Reservation' : 'reserved dragon'}
        </button>
      </div>
    </div>
  );
};

DragonsCard.propTypes = {
  dragon: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.instanceOf(Array).isRequired,
    desc: PropTypes.string.isRequired,
    reserved: PropTypes.bool.isRequired,
  }).isRequired,
};

export default DragonsCard;
