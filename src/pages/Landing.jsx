import Header from "../components/Header";
import Card from "../components/Card";
import ToDoContainer from "../components/ToDoContainer";
import { useLocation } from "react-router-dom"

function Landing(){

    const data = useLocation()

    return(
        <div className="bg-black p-16">
      <div className="bg-[#EFEFEF] p-8 border rounded-md">
        <Header name = {data.state.user}/>

        <div className="flex justify-between gap-5 my-5 flex-wrap">
          <Card bgColor={"#8272DA"} title={"23°"} subtitle={"Coimbatore"} />
          <Card bgColor={"#FD6663"} title={"December"} subtitle={"03:33:33"} />
          <Card bgColor={"#FCA201"} title={"Built using"} subtitle={"React"} />
        </div>

        <ToDoContainer />

        
      </div>
    </div>
    )
}

export default Landing