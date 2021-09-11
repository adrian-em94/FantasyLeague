import Table from 'react-bootstrap/Table'
import './SquadList.css'
import { Link } from 'react-router-dom'

const SquadList = () => {
    return(
        <div className='listContainer'>
            <Table responsive>
                <thead>
                    <tr>
                        <th></th>
                        <th>Player Name</th>
                        <th>Age</th>
                        <th>Number</th>
                        <th>Position</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="specialTR">
                        <td>1</td>
                        <td>Rodolfo Pizarro</td>
                        <td>28</td>
                        <td>10</td>
                        <td>Midfield</td>
                    </tr>
                    <tr className="specialTR">
                        <td>2</td>
                        <td>Omar Bravo</td>
                        <td>38</td>
                        <td>9</td>
                        <td>Striker</td>
                    </tr>
                    <tr className="specialTR">
                        <td>1</td>
                        <td>Rodolfo Pizarro</td>
                        <td>28</td>
                        <td>10</td>
                        <td>Midfield</td>
                    </tr>
                    <tr className="specialTR">
                        <td>2</td>
                        <td>Omar Bravo</td>
                        <td>38</td>
                        <td>9</td>
                        <td>Striker</td>
                    </tr>
                    <tr className="specialTR">
                        <td>1</td>
                        <td>Rodolfo Pizarro</td>
                        <td>28</td>
                        <td>10</td>
                        <td>Midfield</td>
                    </tr>
                    <tr className="specialTR">
                        <td>2</td>
                        <td>Omar Bravo</td>
                        <td>38</td>
                        <td>9</td>
                        <td>Striker</td>
                    </tr>
                    <tr className="specialTR">
                        <td>1</td>
                        <td>Rodolfo Pizarro</td>
                        <td>28</td>
                        <td>10</td>
                        <td>Midfield</td>
                    </tr>
                    <tr className="specialTR">
                        <td>2</td>
                        <td>Omar Bravo</td>
                        <td>38</td>
                        <td>9</td>
                        <td>Striker</td>
                    </tr>
                </tbody>
            </Table>
        </div>
    )
    }

export default SquadList;