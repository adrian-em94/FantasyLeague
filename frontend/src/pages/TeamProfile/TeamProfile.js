import './TeamProfile.css'
import Pitch from "../../images/pitch.png"
import Formation from '../../components/Formation/Formation'

const TeamProfile = () => {
    const chosenFormation = '343';
    return (
            <div className="outerContainer">
                <div className="navbar">
                    <h1>NavBar</h1>
                </div>
                <div className="innerContainer">
                    <div className="leftContainer">
                        <div className="futField">
                            <div className="buttonContainer">
                                <button className='formationButton' type='button' value="433">4-3-3</button>
                                <button className='formationButton' type='button' value="442">4-4-2</button>
                                <button className='formationButton' type='button' value="343">3-4-3</button>
                            </div>
                            <div className="pitch">
                                <img src={Pitch} alt="soccer field"/>
                            </div>
                            <Formation chosenFormation={chosenFormation}/>
                        </div>
                        <div className="squadList">
                            <h1>SQUADLIST</h1>
                        </div>
                    </div>
                    <div className="rightContainer">
                        <div className="playerList">
                            <h1>PLAYERLIST</h1>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default TeamProfile;