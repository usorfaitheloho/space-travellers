import React from "react";
import { useSelector } from "react-redux";
import "./profile.css";

const MyProfile = () => {
  const myRockets = useSelector((state) => state.rockets);
  const myReserveRockets = myRockets.rocketsData.filter(
    (rocket) => rocket.reserved
  );

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
    (dragon) => dragon.reserved
  );
  const handleDragonReservation = () => {
    if (myReserveDragons.length) {
      return myReserveDragons.mag((dragon) => {
        <p key={dragon.id} className="my-dragon">
          {dragon.name}
        </p>;
      });
    }
    return <h2> No reserved Dragons</h2>;
  };

  return (
    <div className="profile">
      <section className="my-missions-sec">
        <h3 className="my-heading"> My Missions</h3>
        <div className="my-missions">
          <p className="my-mission">Telstar</p>
          <p className="my-mission">SES</p>
          <p className="my-mission">AsiaSat</p>
          <p className="my-mission">So50</p>
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
