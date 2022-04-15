import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMissionSuccess } from '../../redux/missions/mission';
import MissionItem from './mission-card';
import './mission-style.scss';

export default function Mission() {
  const initState = useSelector((state) => state.missionReducer);
  const { missions: missionList, loading } = initState;
  const dispatch = useDispatch();
  useEffect(() => {
    if (missionList.length === 0 && !loading) {
      dispatch(fetchMissionSuccess());
    }
  }, []);
  return (
    <div className="missionContainer">
      <table>
        <thead>
          <tr>
            <th style={{ width: '15%' }} aria-label="Mission col">Mission</th>
            <th aria-label="desc column" style={{ width: '15%' }}>Description</th>
            <th aria-label="status mtd" style={{ width: '15%' }}>Status</th>
            <th aria-label="action btn" style={{ width: '15%' }} />
          </tr>
        </thead>
        <tbody>
          {
          missionList
          && missionList.map((item) => (
            <MissionItem
              key={item.mission_id}
              itemDetail={item}
            />
          ))
        }
        </tbody>
      </table>
    </div>
  );
}
