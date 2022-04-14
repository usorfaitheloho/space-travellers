import React from 'react';
import './profile.css';
/* function MyProfile() {
  return (
    <div className="result">
      <div className="Box">
        <h2 className="title">My Rockets</h2>
        <table className="Mission-ProfileTable">
          <tbody />
        </table>
      </div>
      <div className="Box">
        <h2 className="title">My Missions</h2>
        <table className="Mission-ProfileTable">
          <tbody />
        </table>
      </div>
      <div className="Box">
        <h2 className="title">My Dragons</h2>
        <table className="Mission-ProfileTable">
          <tbody />
        </table>
      </div>
    </div>
  );
} */

import { useSelector } from 'react-redux';

const MyProfile = () => {
  const myRockets = useSelector((state) => state.rockets);
  const myReserveRockets = myRockets.rocketsData.filter((rocket) => rocket.reserved);

  const handleReservations = () => {
    if (myReserveRockets.length) {
      return myReserveRockets.map((rocket) => (
        <p key={rocket.id} className="my-rocket">{rocket.name}</p>
      ));
    }
    return <h2>No Reserved Rockets</h2>;
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
        <div className="my-rockets">
          {
          handleReservations()
          }
        </div>
      </section>
    </div>
  );
};

export default MyProfile;
