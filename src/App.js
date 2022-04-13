import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
impo
import './App.css';
import Rocket from './component/rockets/rocket';
import Mission from './component/missions/mission';
import MyProfile from './component/my-profile/profile';
import Dragon from './component/Dragons/DragonCard';
import Header from './component/Header/Header';
import { useDispatch } from 'react-redux';

function App() {
  const dispatch=useDispatch();
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>

          <Route path="/rockets" element={<Rocket />} />
          <Route path="/mission" element={<Mission />} />
          <Route path="/Dragons" element={<Dragon />} />
          <Route path="/profile" element={<MyProfile />} />
          <Route path="/" exact element={<Rocket />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
