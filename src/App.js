
import {BrowserRouter as Router, Route} from "react-router-dom"
import Admin from "./Admin";
import BloodBank from "./BloodBank"
import Donor from './Donor';
import Hospital from "./Hospital";
import Navigation from './Navigation';
import LoginAndSignUp from './LoginAndSignUp';
import Test from './Test';
import AdminRequests from "./AdminRequests";
import HomePage from "./HomePage";
import SignUp from "./SignUp";
import Table from "./Table";



function App() {
  return (
    <Router>
      <Route exact path='/'>
      {/*<Navigation user='home'/> */}
      <LoginAndSignUp  page={'donorSignup'}/>
         {/*<Navigation user='home'/>*/}
       {/*<HomePage/>*/}
        {/*<Table tableName={"BLOOD BANK ACCEPTING"}/>*/}
        {/*<AdminRequests page="hospitalpending"/>*/}
      </Route>
     <Route path='/donorLoginPage'>
         <Navigation user='home'/>
         <LoginAndSignUp  page={'donorLogin'}/>
      </Route>
      <Route path='/donorSignUpPage'>
         <Navigation user='home'/>
         <LoginAndSignUp page={'donorSignup'}/>
      </Route>
      <Route path='/adminLoginPage'>
         <Navigation user='home'/>
         <LoginAndSignUp  page={'adminLogin'}/>
      </Route>
      <Route path='/adminSignUpPage'>
         <Navigation user='home'/>
         <LoginAndSignUp page={'adminSignup'}/>
      </Route>
      <Route path='/hospitalLoginPage'>
         <Navigation user='home'/>
        
         <LoginAndSignUp  page={'hospitalLogin'}/>
      </Route>
      <Route path='/hospitalSignUpPage'>
         <Navigation user='home'/>
        
         <LoginAndSignUp page={'hospitalSignup'}/>
      </Route>
      <Route path='/bloodBankLoginPage'>
         <Navigation user='home'/>
         <LoginAndSignUp  page={'bloodBankLogin'}/>
      </Route>
      <Route path='/bloodBankSignUpPage'>
         <Navigation user='home'/>
         <LoginAndSignUp page={'bloodBankSignup'}/>
      </Route>

      <Route path='/hospitalpending'>
         <AdminRequests page='hospitalpending'/>
      </Route>
      <Route path='/hospitalaccepted'>
         <AdminRequests page='hospitalaccepted'/>
      </Route>
      <Route path='/bloodbankpending'>
         <AdminRequests page='bloodbankpending'/>
      </Route>
      <Route path='/bloodbankaccepted'>
         <AdminRequests page='bloodbankaccepted'/>
      </Route>
    
    </Router>

    
  )
}

export default App;
