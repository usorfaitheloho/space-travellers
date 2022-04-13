import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import './App.css';
import Rocket from './component/rockets/rocket';
import Mission from './component/missions/mission';
import MyProfile from './component/my-profile/profile';
import { fetchPostsRequestDragons } from './redux/Dragons/dragons';
import Dragons from './component/Dragons/Dragons';
import Header from './component/Header/Header';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPostsRequestDragons());
  }, []);

  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/rockets" element={<Rocket />} />
          <Route path="/mission" element={<Mission />} />
          <Route path="/Dragons" element={<Dragons />} />
          <Route path="/profile" element={<MyProfile />} />

          <Route path="/" exact element={<Rocket />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
