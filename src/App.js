import { BrowserRouter as Routes, Router, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch ,useSelector } from 'react-redux';
import { fetchPostsRequestDragons } from './redux/Dragons/dragons';
import './App.css';
import Rocket from './component/rockets/rocket';
import Mission from './component/missions/mission';
import MyProfile from './component/my-profile/profile';

import Dragons from './component/Dragons/Dragons';
import Header from './component/Header/Header';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPostsRequestDragons());
  }, []);
  const dragons = useSelector((state) => state.dragon.dragons);
  return (
    <Router>
      <div className="App">

        <Header />
        <Routes>
          <Route path="/Mission" element={<Mission />} />
          <Route path="/MyProfile" element={<MyProfile />} />
          {/* please fix the below route */}
          <Route path='/Dragons'>
            <Dragons dragon={dragons} />
          </Route>
          <Route path="/" element={<Rocket />} />
        </Routes>

      </div>
    </Router>
  );
}

export default App;
