import './App.css';
import {Switch,Route} from 'react-router-dom';
import Login from './Components/Login';
import Signup from './Components/Signup';
import Roles from './Components/Roles';
import CreateCompany from './Components/CreateCompany';
import DealersHome from './Components/DealersHome';
import DealersProfile from './Components/DealersProfile';
import CustomerHome from './Components/CustomerHome';
import CompanyHome from './Components/CompanyHome';
import CompanyProfile from './Components/CompanyProfle';
import CompanyAddProduct from './Components/CompanyAddProducts'

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path = '/' component={Login}/>
        <Route exact path = '/CustomerSignup' component={Signup}/>
        <Route exact path = '/Roles' component={Roles}/>
        <Route exact path = '/CreateCompany' component={CreateCompany}/>
        <Route exact path = '/DealersHome' component={DealersHome}/>
        <Route exact path = '/DealersProfile' component={DealersProfile}/>
        <Route exact path = '/CustomersHome' component={CustomerHome}/>
        <Route exact path = '/CompanysHome' component={CompanyHome}/>
        <Route exact path = '/CompanysProfile' component={CompanyProfile}/>
        <Route exact path = '/CompanyAddProduct' component={CompanyAddProduct}/>
      </Switch>
    </div>
  );
}

export default App;
