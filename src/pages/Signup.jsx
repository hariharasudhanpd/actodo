import { Link } from "react-router-dom"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

function Signup(props){
    
    const [eusername,seteusername] = useState()
    const [epassword, setepassword] =useState()

    const users = props.users
    const setusers = props.setusers
    const navigate = useNavigate()

    function handleUInput(evt){
        seteusername(evt.target.value)
    }

    function handlePInput(evt){
        setepassword(evt.target.value)
    }

    function addUser(){
        setusers([...users,{username:eusername, password:epassword}])
        navigate("/")
    }

    return(
        <div className="bg-black p-10">
            <div className="bg-[#EFEFEF] p-10 border rounded-md">
                <h1 className="text-3xl font-medium">Heyy hi..!!</h1>
                <p className="font-normal my-2">Signup here :)</p>

                <div className="flex flex-col gap-2 my-4">
                    <input type="text" className="border-black bg-transparent w-52 p-1 border rounded-md" placeholder="Username" onChange={handleUInput}/>
                </div>

                <div className="flex flex-col gap-2 my-4">
                    <input type="text" className="border-black bg-transparent w-52 p-1 border rounded-md" placeholder="Password" onChange={handlePInput}/>
                </div>

                <div className="flex flex-col gap-2 my-4">
                    <input type="text" className="border-black bg-transparent w-52 p-1 border rounded-md" placeholder="Confirm Password"/>
                </div>

               
                <button className="bg-[#f1de0c] w-24 border rounded-md border-none p-1 hover:cursor-pointer" onClick={addUser}>Signup</button>
                

                <p>Already have an account? <Link to={"/"} className="underline">Login</Link></p>
            </div>
        </div>
    )
}

export default Signup