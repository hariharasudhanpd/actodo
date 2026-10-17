
import ToDoItem from "./ToDoItem"

function ToDoList(props) {

    const activityArr = props.activityArr
    const setactivityArr = props.setactivityArr

    return (
        <div className="bg-[#4a92B0] border rounded-md p-3 flex-grow ">
            <h1 className="text-2xl font-medium">Today's Activity</h1>

            {activityArr.length === 0 ? <p>You haven't added anything yet..!</p> : ""}
            {
                activityArr.map(function (x, index) {
                    return (
                        <ToDoItem
                            key={x.id}
                            x={x}
                            index={index}
                            iditem={x.id}
                            activityArr={activityArr}
                            setactivityArr={setactivityArr}
                        />
                    )
                })
            }

        </div>
    )
}

export default ToDoList