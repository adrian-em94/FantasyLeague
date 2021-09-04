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
                                <button className="goalie" type="button">1</button>

                                
                                <button className="leftBack" type="button">2</button>
                                <button className="leftCenterBack" type="button">3</button>
                                <button className="rightCenterBack" type="button">4</button>
                                <button className="rightBack" type="button">5</button>

                                <button className="leftMiddle" type="button">6</button>
                                <button className="centerMiddle" type="button">10</button>
                                <button className="rightMiddle" type="button">8</button>

                                <button className="leftForward" type="button">9</button>
                                <button className="centerForward" type="button">11</button>
                                <button className="rightForward" type="button">7</button>


                                
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