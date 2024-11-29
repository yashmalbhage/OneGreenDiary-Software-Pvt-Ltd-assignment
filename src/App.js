import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import UserList from './pages/UsersList';
import AddUser from './components/AddUser';
import UserDetails from './pages/UserDetails';
import Navbar from './components/Navbar';

function App() {
  return (
    <div>
          <Navbar/>

    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<UserList />} />
          <Route path="/user/:name" element={<UserDetails />} />

<Route path="/add-user" element={<AddUser />} />
        </Routes>
      </Router>
    </Provider>
    </div>
  );
}

export default App;
