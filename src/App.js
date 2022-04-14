import { BrowserRouter as Routes, Router, Route } from 'react-router-dom';
import './App.css';
import Rocket from './component/rockets/rocket';
import Mission from './component/missions/mission';
import MyProfile from './component/my-profile/profile';
import Dragons from './component/Dragons/Dragons';
import Header from './component/Header/Header';

function App() {
  return (
    <Router>
      <div className="App">

        <Header />
        <Routes>
          <Route path="/Mission" element={<Mission />} />
          <Route path="/MyProfile" element={<MyProfile />} />

          <Route path="/Dragons" element={<Dragons />} />
          <Route path="/" element={<Rocket />} />
        </Routes>

      </div>
    </Router>
  );
}

export default App;
