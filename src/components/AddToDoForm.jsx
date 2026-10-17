import { useState } from "react"

function AddToDoForm(props){

    const activityArr = props.activityArr
    const setactivityArr = props.setactivityArr

    const [newactivity, setnewactivity] = useState("")

    function handleChange(evt){
        setnewactivity(evt.target.value)
    }

    function addnewActivity(){
        setactivityArr([...activityArr, { id: Date.now(), activity: newactivity }])
        setnewactivity("")
    }

    return(
        <div className="flex flex-col gap-3">
                    <h1 className="text-2xl font-medium">My Activities</h1>

                    <div>
                        <input value={newactivity} onChange={handleChange} className="bg-transparent border border-black p-1 rounded-sm" placeholder="Any Activity..?"></input>
                        <button onClick={addnewActivity} className="bg-black text-white border border-black p-1 rounded-sm">Add</button>
                    </div>
                </div>
    )
}

export default AddToDoForm