
import  UserForm  from "../components/userForm"
import userService from "../services/userServices"
import toast, { Toaster } from 'react-hot-toast';
import { useState } from "react"
import type { ChangeEvent, FormEvent } from "react"

interface user {
    first_name: string
    last_name: string
    email: string
    gender: string
}

const  initialleState: user = {
    first_name: "",
    last_name: "",
    email: "",
    gender: ""
}
function SignUP () {
    const [loading, setLoading] = useState<boolean>(false)
    const [formData, setFormData] = useState<user>(initialleState)

const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({
        ...formData,
        [e.target.name]: e.target.value
    })
}

const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const fetch = async () => {
    try{
        setLoading(true)
       await userService.createUser(formData)
       toast.success("User Created Successfully")
        setFormData(initialleState)

    }catch(error){
        console.log(error)
    }
    finally{
        await new Promise(resolve => setTimeout(resolve, 3000))
        setLoading(false)
    }
    }
    fetch()
  
}
    return (
        <div className="flex flex-col gap-2 justify-center items-center">
            <h1 className="text-2xl font-bold text-white">Create Your Account</h1>
           <div className="">
           <UserForm 
           formdata={formData}
           handleChange={handleChange}
           handleSubmit={handleSubmit}
           loading={loading}
           />
           </div>
           <Toaster position="top-center"    />
           
        </div>
    )
}
export default SignUP