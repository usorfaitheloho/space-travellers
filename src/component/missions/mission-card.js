import React from 'react';
import { useDispatch } from 'react-redux';
import { updateMembership } from '../../redux/missions/mission';

export default function missionItem({ itemDetail }) {
  const dispatch = useDispatch();

  return (
    <tr>
      <td>
        <strong>
          {itemDetail.mission_name}
        </strong>
      </td>
      <td style={{ width: '20%' }}>{itemDetail.description}</td>
      <td className="btnDataBox">
        <button type="button" className={itemDetail.reserved ? 'activeStatus' : ''}>{itemDetail.reserved ? 'Active member' : 'Not a member'}</button>
      </td>
      <td className="btnDataBox">
        <button type="button" className={`rightBtn ${itemDetail.reserved ? 'activeAction' : ''}`} onClick={() => dispatch(updateMembership(itemDetail.mission_id))}>
          { itemDetail.reserved ? 'Leave mission' : 'Join mission'}
        </button>
      </td>
    </tr>
  );
}
