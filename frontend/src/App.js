import React from 'react'
//import axios from 'axios'
import { BrowserRouter as Router,
          Switch,
          Route,} from "react-router-dom"
import Login from './components/Login'
import CreateAccount from './components/CreateAccount'
import Home from './pages/Home'
//added code

const App = () => {
  //const newText = 'Test'
  //axios.get("https://v3.football.api-sports.io/players/squads", {"headers": {"x-apisports-key": "30c40cefb0a61fe59aa017f08397a139"}})
  // axios.get("https://www.easports.com/fifa/ultimate-team/api/fut/item")  
  // .then(response => {
  //     console.log(response);
  //   })
  //   .catch(err => {
  //     console.log(err);
  //   });

  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact component= {Login} />
          <Route path="/CreateAccount" component= {CreateAccount} />
          <Route path="/Home" component={Home} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
