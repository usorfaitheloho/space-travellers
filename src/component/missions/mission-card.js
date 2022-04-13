import React from 'react';
// import PropTypes from 'prop-types';

export default function missionItem({ itemDetail }) {
  const len = itemDetail.payload_ids.length;
  return (
    <tr>
      <td>
        <strong>
          {itemDetail.mission_name}
        </strong>
      </td>
      <td>{itemDetail.description}</td>
      <td className="btnDataBox">
        <button type="button" className={len >= 3 ? 'activeStatus' : ''}>{len >= 3 ? 'Active member' : 'Not a member'}</button>
      </td>
      <td className="btnDataBox">
        <button type="button" className={`rightBtn ${len >= 3 ? 'activeAction' : ''}`}>
          { len >= 3 ? 'Leave mission' : 'Join mission'}
        </button>
      </td>
    </tr>
  );
}
