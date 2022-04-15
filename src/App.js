import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import Rocket from './component/rockets/rocket';
import Mission from './component/missions/mission';
import MyProfile from './component/my-profile/profile';
import Dragon from './component/Dragons/Dragons';
import Header from './component/Header/Header';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/rockets" element={<Rocket />} />
          <Route path="/mission" element={<Mission />} />
          <Route path="/dragons" element={<Dragon />} />
          <Route path="/profile" element={<MyProfile />} />

          <Route path="/" exact element={<Rocket />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
