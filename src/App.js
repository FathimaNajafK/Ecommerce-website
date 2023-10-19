import SignInPage from './components/SignIn';
import SignUp from './components/SignUp';
import ForgetPassword from './components/Forgot';


import {Routes,Route,useNavigate} from 'react-router-dom'

function App() {
 
  const navigate = useNavigate()

  return (
    <div classname="App">
      <Routes>
      <Route element={<SignInPage/>} path='/signin'/>
      <Route element={<SignUp/>} path='/signup'/>
      <Route element={<ForgetPassword/>} path='/forgot'/>
      </Routes>
    </div>
  );
}

export default App;
