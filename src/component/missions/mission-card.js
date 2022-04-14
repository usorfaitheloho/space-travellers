import React from 'react';
import { useDispatch } from 'react-redux';
import { updateMembership } from '../../redux/missions/mission';

export default function missionItem({ itemDetail }) {
  const dispatch = useDispatch();
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
        <button type="button" className={`rightBtn ${len >= 3 ? 'activeAction' : ''}`} onClick={() => dispatch(updateMembership(itemDetail.mission_id))}>
          { len >= 3 ? 'Leave mission' : 'Join mission'}
        </button>
      </td>
    </tr>
  );
}
