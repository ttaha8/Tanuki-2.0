import React from 'react';

import ProgressBar from "@ramonak/react-progress-bar";

import Card from "../shared/UIElements/Card/Card"
import "./ProgressZone.css";




const ProgressZone = props => {
    
    const listOfTasks = props.tasks.map(task =>{
        return (
            <tr key={task.id}>
                <td>{task.id}</td>
                <td>{task.tool}</td>
                <td><ProgressBar bgColor={"#ff0055"} completed={task.progress}/></td>
            </tr>
        )
    })
    
    
    
    return (
        <Card className='progress-card'>
        <div className='progress-zone'>
            <h2>Current Tasks</h2>
            <table className='progress-table'>
                <tbody>
                    <tr>
                        <th>ID</th>
                        <th>Tool</th>
                        <th>Progress</th>
                    </tr>
                    {listOfTasks}
                </tbody>
            </table>
        </div>
            </Card>
    )
}

export default ProgressZone