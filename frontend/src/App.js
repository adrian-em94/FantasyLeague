import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { BrowserRouter as Router,
          Switch,
          Route,} from "react-router-dom"
import Login from './components/Login'
import CreateAccount from './components/CreateAccount'
import Home from './pages/Home'
//added code

const App = () => {
  //const newText = 'Test'
  const initialTeam = {
    id: "",
    name: "",
    logo: "",
  }

  const [squad, setsquad] = useState([]);
  const [team, setteam] = useState(initialTeam);
  const [squadPlayers, setsquadPlayers] = useState([]);
  const headerconfig = {
    method: 'get',
    url: "https://v3.football.api-sports.io/players/squads",
    params: {team: '2278'},
    qs: {team: '2278'},
    headers: {
      "x-apisports-key": "30c40cefb0a61fe59aa017f08397a139",
      "x-rapidapi-host": "v3.football.api-sports.io"
    }
  }

  axios(headerconfig).then(response => {
      const squad = response.data.response[0];
      setsquad(squad);
      const team = squad.team;
      const players = squad.players;
      console.log(squad)
      setteam(team)
      setsquadPlayers(players)
    })
    .catch(err => {
      console.log(err);
    });

  try{
    const config = {
      headers: {
            "Content-type": "application/json",
      }
    }
     console.log("I TRIED")   
    const { data } = axios.post(
      '/api/dbcalls', 
      {
        _id: squad.team.id, 
        name: squad.team.name,
        logo: squad.team.logo,
      },
        config
    );
  }catch(error){
    
  }

  return (
    <>
    <div>{team.id}</div>
    <div>{team.name}</div>
    <div><img src={team.logo} alt='best team in the world'/></div>
    {squadPlayers.map((person, personIdx) => <div key={personIdx}>
      {person.name}
    </div>)}
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
