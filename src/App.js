import logo from './logo.svg';
import './App.css';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import {Route,Switch,Link} from 'react-router-dom'
import Leaves from './pages/Leaves';
import Tasks from './pages/Tasks';
import Requests from './pages/Requests';
import Navigation from './pages/Navigation';

function App() {
  return (
    <div className="App">
     
   
    <Switch> 
    <Route path="/" exact component={Login}/>
    <Navigation>
    <Route path="/dashboard" component={Dashboard}/>
    <Route path="/leaves" exact component={Leaves}/>
    <Route path="/tasks" component={Tasks}/>
    <Route path="/requests" exact component={Requests}/>
    </Navigation>
    </Switch>
   
    </div>
  );
}

export default App;
