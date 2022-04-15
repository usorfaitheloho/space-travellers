import React from 'react';
import { useSelector } from 'react-redux';
import './profile.css';

const MyProfile = () => {
  const myRockets = useSelector((state) => state.rockets);
  const myReserveRockets = myRockets.rocketsData.filter((rocket) => rocket.reserved);
  const myMissions = useSelector((state) => state.missionReducer.missions);
  const myReservedMissions = myMissions.filter((item) => item.reserved === true);

  const handleReservations = () => {
    if (myReserveRockets.length) {
      return myReserveRockets.map((rocket) => (
        <p key={rocket.id} className="my-rocket">
          {rocket.name}
        </p>
      ));
    }
    return <h2>No Reserved Rockets</h2>;
  };

  const myDragons = useSelector((state) => state.dragons);
  const myReserveDragons = myDragons.DragonsData.filter(
    (dragon) => dragon.reserved,
  );
  const handleDragonReservation = () => {
    if (myReserveDragons.length) {
      return myReserveDragons.map((dragon) => (
        <p key={dragon.id} className="my-dragon">
          {dragon.name}
        </p>
      ));
    }
    return <h2> No reserved Dragons</h2>;
  };

  return (
    <div className="profile">
      <section className="my-missions-sec">
        <h3 className="my-heading"> My Missions</h3>
        <div className="my-missions">
          {
            myReservedMissions.length === 0
              ? <h2>No Reserved Missions</h2> : myReservedMissions.map((item) => (
                <p className="my-mission" key={item.mission_id}>{item.mission_name}</p>
              ))
          }
        </div>
      </section>
      <section className="my-rockets-sec">
        <h3 className="my-heading"> My Rockets </h3>
        <div className="my-rockets">{handleReservations()}</div>
      </section>
      <section className="my-dragons-sec">
        <h3 className="my-heading">My Dragons</h3>
        <div className="my-dragons">{handleDragonReservation()}</div>
      </section>
    </div>
  );
};
export default MyProfile;
