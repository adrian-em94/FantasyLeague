import './TeamProfile.css'
import Pitch from "../../images/pitch.png"

const TeamProfile = () => {
    return (
            <div className="outerContainer">
                <div className="navbar">
                    <h1>NavBar</h1>
                </div>
                <div className="innerContainer">
                    <div className="leftContainer">
                        <div className="futField">
                            <div className="pitch">
                                <img src={Pitch} alt="soccer field"/>
                            </div>
                            <div className="players">
                                <div className="goalie" />
                                    
                                
                            </div>
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

export default TeamProfile