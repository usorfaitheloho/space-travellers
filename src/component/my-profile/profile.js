import React from 'react';
import { useSelector } from 'react-redux';
import './profile.css';

const MyProfile = () => {

  const myRockets = useSelector((state) => state.rockets);
  const myReserveRockets = myRockets.filter((rocket) => rocket.reserved = true);

  return(
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
        <p className="my-rocket">Falcon9</p>
        <p className="my-rocket">Falcon</p>
        <p className="my-rocket">Starship</p>
      </div>
    </section>
  </div>
  );
};
export default MyProfile;
