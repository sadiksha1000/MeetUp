import {Route,Routes} from 'react-router-dom';
import AllMeetups from './pages/AllMeetups';
import NewMeetup from './pages/NewMeetup';
import Favorites from './pages/Favorites';
import Layout from './components/layout/Layout';


function App() {
  return (
    <Layout>
      {/* New ES6 Format-No switch instead wrap route with routes */}
        <Routes>
          {/* Defining the routes */}
          <Route path='/' element={<AllMeetups/>}/>
          <Route path='/new-meetup' element={<NewMeetup/>}/>
          <Route path='/favorites' element={<Favorites/>}/>
        </Routes>
    </Layout>
  );
}

export default App;
