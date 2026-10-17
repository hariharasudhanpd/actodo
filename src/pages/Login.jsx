import { useState } from "react"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"

function Login(props) {

    const [eusername, seteusername] = useState()
    const [epassword, setepassword] = useState()
    const [ruser, setruser] = useState(true)

    const users = props.users
    const navigate = useNavigate()

    var userfound = false


    function checkUser() {
        users.forEach(function (item) {
            if (item.username === eusername && item.password === epassword) {
                console.log("Login Successfull")
                userfound = true
                navigate("/landing", {state:{user: eusername}})
            }
        })

        if (userfound === false) {
                console.log("Login failed")
                setruser(false)
        }
    }

    function handleUInput(evt) {
        seteusername(evt.target.value)
    }

    function handlePInput(evt) {
        setepassword(evt.target.value)
    }



    return (
        <div className="bg-black p-10">
            <div className="bg-[#EFEFEF] p-10 border rounded-md">
                <h1 className="text-3xl font-medium">Heyy hi..!!</h1>
                {ruser ? <p className="font-light">I help you manage your tasks after you Login :).</p> : <p className="text-rose-700">Please signup before you login.</p>}



                <div className="flex flex-col gap-2 my-4">
                    <input type="text" className="border-black bg-transparent w-52 p-1 border rounded-md" placeholder="Username" onChange={handleUInput} />
                </div>

                <div className="flex flex-col gap-2 my-4">
                    <input type="text" className="border-black bg-transparent w-52 p-1 border rounded-md" placeholder="Password" onChange={handlePInput} />
                </div>

                <button className="bg-[#8272DA] w-25 border rounded-md border-none p-1 hover:cursor-pointer" onClick={checkUser}>
                    Login
                </button>

                <p className="my-2">Create an account? <Link to={"/signup"} className="underline">Signup</Link></p>
            </div>
        </div>
    )
}

export default Login