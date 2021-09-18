import Table from 'react-bootstrap/Table'
import '../PlayerList/PlayerList.css'
import { Link } from 'react-router-dom'
import data from '../../../data/sampleSquad'
import { useState } from 'react'
import ReactTable from "react-table";
import '@fortawesome/fontawesome-free/css/all.min.css'; import
'bootstrap-css-only/css/bootstrap.min.css'; import
'mdbreact/dist/css/mdb.css';
import { MDBTable, MDBDataTable, MDBTableBody, MDBTableHead } from 'mdbreact';



const PlayerList = () => {
    //const [players, setplayers] = useState(data);

    const addtoSquad = (message) => {
        console.log(message)
    }
    return(
        <div className="playerContainer">
           {/* <MDBDataTable scrollY maxHeight="90vh" data={data} responsive fixed/> */}
           <MDBTable scrollY fixed maxHeight="75vh" hover>
                <MDBTableHead columns={data.columns} />
                <MDBTableBody rows={data.rows} onClick={() => addtoSquad(this.row.id)}/>
           </MDBTable>
               
            {/* <Table className="playerTable" responsive>
                <thead>
                    <tr>
                        <th></th>
                        <th>Player Name</th>
                        <th>Age</th>
                        <th>Number</th>
                        <th>Position</th>
                        <th>Photo</th>
                    </tr>
                </thead>
                <tbody>
                    {players.map((player) => (
                        <tr className="playerTR">
                            <td>{player.id}</td>
                            <td>{player.name}</td>
                            <td>{player.age}</td>
                            <td>{player.number}</td>
                            <td>{player.position}</td>
                            <td><img src={player.photo} alt="player headshot"/></td>
                        </tr>   
                    ))}
                </tbody>
            </Table> */}
        </div>
    )
    }

export default PlayerList;