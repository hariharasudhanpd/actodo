import AddToDoForm from "./AddToDoForm"
import ToDoList from "./ToDoList.jsx"
import { useState } from "react"

function ToDoContainer() {

    const [activityArr, setactivityArr] = useState([
        {
            id:1,
            activity:"Go for a walk"
        },
        {
            id:2,
            activity:"Read for half an hour"
        },
        {
            id:3,
            activity:"Take sticky notes everywhere you go..!"
        }
    ])

    return (
        <div>
            <div className="flex gap-5 flex-wrap"> 
                
                <AddToDoForm activityArr={activityArr} setactivityArr={setactivityArr}/>
                <ToDoList activityArr={activityArr} setactivityArr={setactivityArr} />
            </div>
        </div>
    )
}

export default ToDoContainer