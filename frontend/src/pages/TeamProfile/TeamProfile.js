import './TeamProfile.css'
import Pitch from "../../images/pitch.png"
import Formation from '../../components/Formation/Formation'
import { useState, } from 'react'
import SquadList from './SquadList/SquadList'
import PlayerList from './PlayerList/PlayerList'

//default formation
const initialState = {
    form: '442'
}


const TeamProfile = () => {
    //create a state variable that has a default formation
    const [squadFormation, setsquadFormation] = useState(initialState)
    
    //formations available
    const formations = ['433', '442', '343'];

    //when the button is clicked the value should be changed in the state 
    const handleClicked = (value) => {
        setsquadFormation({"form": value})
    }

    return (
            <div className="outerContainer">
                <div className="navbar">
                    <h1>NavBar</h1>
                </div>
                <div className="innerContainer">
                    <div className="leftContainer">
                        <div className="futField">
                            <div className="buttonContainer">
                                <button className='formationButton' type='button' value="433" onClick={() => handleClicked(formations[0])}>4-3-3</button>
                                <button className='formationButton' type='button' value="442" onClick={() => handleClicked(formations[1])}>4-4-2</button>
                                <button className='formationButton' type='button' value="343" onClick={() => handleClicked(formations[2])}>3-4-3</button>
                            </div>
                            <div className="pitch">
                                <img src={Pitch} alt="soccer field"/>
                            </div>
                            <Formation chosenFormation={squadFormation}/>
                        </div>
                        <div className="squadList">
                            <h3>SquadList</h3>
                            <SquadList />
                        </div>
                    </div>
                    <div className="rightContainer">
                        <div className="playerList">
                            <h1>PLAYERLIST</h1>
                            <PlayerList />
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default TeamProfile;