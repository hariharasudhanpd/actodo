function ToDoItem(props){

    const activityArr = props.activityArr
    const setactivityArr = props.setactivityArr

    function handleDelete(deleteid){
        const temprr = activityArr.filter(function(item){
            if(item.id === deleteid){
                return false
            }
            else{
                return true
            }
        })

        setactivityArr(temprr)
    }

    return(
            <div className="flex justify-between">
            <p>{props.index+1}. {props.x.activity}</p>
            <button className="text-red-600" onClick={()=>handleDelete(props.iditem)}>Delete</button>
            </div>
    )
}

export default ToDoItem