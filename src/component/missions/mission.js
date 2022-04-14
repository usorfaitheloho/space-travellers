import { useSelector } from 'react-redux';
import MissionItem from './mission-card';
import './mission-style.scss';

export default function Mission() {
  const missionList = useSelector((state) => state.missionReducer.missions);

  return (
    <table>
      <thead>
        <tr>
          <th style={{ width: '15%' }} aria-label="Mission col">Mission</th>
          <th aria-label="desc column">Description</th>
          <th aria-label="status mtd" style={{ width: '15%' }}>Status</th>
          <th aria-label="action btn" style={{ width: '15%' }} />
        </tr>
      </thead>
      <tbody>
        {
          missionList.map((item) => (
            <MissionItem
              key={item.mission_id}
              itemDetail={item}
            />
          ))
        }
      </tbody>
    </table>
  );
}
