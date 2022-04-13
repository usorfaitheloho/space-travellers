import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Dragon from './DragonCard';
import { getDragons } from '../../redux/Dragons/actions/Dragon';

function Dragons() {
  const dragons = useSelector((state) => state.dragons);

  const dispatch = useDispatch();

  useEffect(() => {
    if (!dragons.length) {
      dispatch(getDragons());
    }
  }, []);

  return (
    <>
      {
        dragons.map((dragon) => (
          <Dragon
            key={dragon.id}
            id={dragon.id}
            image={dragon.image[0]}
            name={dragon.name}
            description={dragon.description}
            reserved={dragon.reserved}
          />
        ))
      }
    </>
  );
}

export default Dragons;
