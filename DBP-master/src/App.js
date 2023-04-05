import './App.css';
import {Switch,Route} from 'react-router-dom';
import Login from './Components/Login';
import Signup from './Components/Signup';
import Roles from './Components/Roles';
import CreateCompany from './Components/CreateCompany';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path = '/' component={Login}/>
        <Route exact path = '/CustomerSignup' component={Signup}/>
        <Route exact path = '/Roles' component={Roles}/>
        <Route exact path = '/CreateCompany' component={CreateCompany}/>
        
      </Switch>
    </div>
  );
}

export default App;
