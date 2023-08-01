import './App.css';
import {BrowserRouter as Router , Routes, Route} from 'react-router-dom'
import Home from '../src/components/pages/Home'
import Login from './components/pages/Login';
import Register from './components/pages/Register'
import Admin from './components/pages/Admin/Admin'
import User from './components/pages/User/User'
import Error from './components/Error';
import EditUser from './components/pages/User/EditUser';
import UserInfo from './components/pages/Admin/UserInfo';
import EditAdmin from './components/pages/Admin/EditAdmin';

function App() {
  return (
    <>

<Router>
       
        
       
       <Routes>
         <Route path="/" element={<Home />} />
         <Route path="*" element={<Error/>} />
        
         <Route path="/Login" element={<Login />} />
         <Route path="/register" element={<Register />} />

         <Route path="/admin" element={<Admin />} />
         <Route path="/user" element={<User/>} />
         <Route path="/edits/:id" element={<EditUser />} />



         <Route path="/info/:id" element={<UserInfo />} />


         <Route path="/adminedit/:id" element={<EditAdmin />} />


      
      
       </Routes>



   </Router>
    </>
  );
}

export default App;
