import Signup from './Components/SignUp';
import Login from './Components/Login';
import Main from './Components/Main';
import {Route,BrowserRouter as Router} from 'react-router-dom';
function App() {
  return (
    <Router>
        <Route exact path="/">
          <Signup />
        </Route>
        <Route path="/Login">
          <Login />
        </Route>
        <Route path="/Main">
          <Main />
        </Route>
    </Router>
    
    
  );
}

export default App;
