import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { BrowserRouter as Router,
          Switch,
          Route,} from "react-router-dom"
import Login from './components/Login'
import CreateAccount from './components/CreateAccount'
import Home from './pages/Home'
import './App.css'
import TeamProfile from './pages/TeamProfile/TeamProfile'
//added code

const App = () => {
  //const newText = 'Test'
  const initialTeam = {
    id: "",
    name: "",
    logo: "",
  }

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

  // //get api info
  // axios(headerconfig).then(response => {
  //     const squad = response.data.response[0];
  //     const team = squad.team;
  //     const players = squad.players;

  //     //setstate to the received data
  //     setteam(team)
  //     setsquadPlayers(players)
  //     console.log(team)
  //     console.log(players)
  //   })
  //   .catch(err => {
  //     console.log(err);
  //   });

  // try{
  //   const config = {
  //     headers: {
  //           "Content-type": "application/json",
  //     }
  //   }

  //   const { data } = axios.post(
  //     '/api/dbcalls', 
  //     {
  //       _id: team._id,
  //       name: team.name,
  //       logo: team.logo,
  //       players: [
  //         {
  //           name: squadPlayers[0].name,
  //           age: squadPlayers[0].age,
  //           number: squadPlayers[0].number,
  //           photo: squadPlayers[0].photo,
  //           position: squadPlayers[0].position,

  //         }
  //       ],
  //     },
  //       config
  //   );
  // }catch(error){
  //   console.log(error)
  // }

  return (
    <>
    {/* <div>{team.id}</div>
    <div>{team.name}</div>
    <div><img src={team.logo} alt='best team in the world'/></div>
    {squadPlayers.map((person, personIdx) => <div key={personIdx}>
      {person.name}
    </div>)} */}
    <span className="font-custom">
      <Router>
        <Switch>
          <Route path="/" exact component= {Login} />
          <Route path="/CreateAccount" component= {CreateAccount} />
          <Route path="/Home" component={Home} />
          <Route path='/TeamProfile' component={TeamProfile} />
        </Switch>
      </Router>
    </span>
    </>
  );
}

export default App;
