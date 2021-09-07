import './Formation.css'

const Formation = ({ chosenFormation } ) => {
    const a = '433';
    const b = '442';
    const c = '343';

    switch(chosenFormation){
        case a:
            return (
                <div className="players">
                    <button className="goalie" type="button">1</button>                       
                    <button className="leftBack_433" type="button">2</button>
                    <button className="leftCenterBack_433" type="button">3</button>
                    <button className="rightCenterBack_433" type="button">4</button>
                    <button className="rightBack_433" type="button">5</button>
                    <button className="leftMiddle_433" type="button">6</button>
                    <button className="centerMiddle_433" type="button">10</button>
                    <button className="rightMiddle_433" type="button">8</button>
                    <button className="leftForward_433" type="button">9</button>
                    <button className="centerForward_433" type="button">11</button>
                    <button className="rightForward_433" type="button">7</button>
                </div>
            )
        case b:
            return (
                <div className="players">
                    <button className="goalie" type="button">1</button>                       
                    <button className="leftBack_433" type="button">2</button>
                    <button className="leftCenterBack_433" type="button">3</button>
                    <button className="rightCenterBack_433" type="button">4</button>
                    <button className="rightBack_433" type="button">5</button>
                    <button className="leftMiddle_442" type="button">6</button>
                    <button className="centerLeftMiddle_442" type="button">10</button>
                    <button className="centerRightMiddle_442" type="button">8</button>
                    <button className="rightMiddle_442" type="button">9</button>
                    <button className="leftForward_442" type="button">11</button>
                    <button className="rightForward_442" type="button">7</button>
                </div>
            )
        case c:
            return (
                <div className="players">
                    <button className="goalie" type="button">1</button>                       
                    <button className="leftCenterBack_343" type="button">2</button>
                    <button className="middleCenterBack_343" type="button">3</button>
                    <button className="rightCenterBack_343" type="button">4</button>
                    <button className="leftMiddle_442" type="button">5</button>
                    <button className="centerLeftMiddle_442" type="button">6</button>
                    <button className="centerRightMiddle_442" type="button">10</button>
                    <button className="rightMiddle_442" type="button">8</button>
                    <button className="leftForward_433" type="button">9</button>
                    <button className="centerForward_433" type="button">11</button>
                    <button className="rightForward_433" type="button">7</button>
                </div>
            )
        default:
            break;
    }
    
}

export default Formation; 
    