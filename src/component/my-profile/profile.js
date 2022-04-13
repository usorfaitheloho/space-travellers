import React from 'react';

import './profile.css';

function MyProfile() {
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
}

export default MyProfile;
