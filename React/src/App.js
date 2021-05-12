import logo from './logo.svg';
import './App.css';
import Login from './components/Login/Login'; 
import Register from './components/Register/Register';
import Dashboard from './components/Dashboard/Dashboard';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './UI/Header';
import Footer from './UI/Footer';
import {AuthProvider} from './containers/AuthProvider';

const App = props =>  {
  
  return (
    <AuthProvider>
     <Router forceRefresh={true}>
     <Header/>
     <div className="container">
       <Switch>
         <Route component={Login} path="/login" exact={true} />
         <Route component={Register} path="/register" />
         <Route component={Dashboard} path="/dashboard" />
       </Switch>
     </div>
     <Footer/>
   </Router>
   </AuthProvider>
  );
}

export default App;
