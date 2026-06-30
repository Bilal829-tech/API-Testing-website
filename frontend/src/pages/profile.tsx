import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import userService from "../services/userServices"
import UserForm from "../components/userForm"
import type { ChangeEvent, FormEvent } from "react"
import toast, { Toaster } from 'react-hot-toast';
import Loader from "../components/loader"

interface User {
  id: number
  first_name: string
  last_name: string
  email: string
  gender: string
}

const initialleState:User={
    id: 0,
    first_name: "",
    last_name: "",
    email: "",
    gender: ""
}

function Profile () {
  const { id } = useParams<{id: string}>()
  const isEditMode = Boolean(!!id)
  const [user, setUser] = useState<User | null>(initialleState)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)


  useEffect(() => {
    if (!id) {
      setError('Missing user id')
      setLoading(false)
      return
    }

    const fetchUser = async () => {
      try {
        const data = await userService.getUserById(Number(id))
        setUser(data)
      } catch (err) {
        setError('Unable to load user')
        console.error(err)
      } finally {
        setLoading(false)
      }
    }

    fetchUser()
  }, [id])

  if (error) {
    return <div className="text-red-500">{error}</div>
  }

  if (!user) {
    return <div className="text-white">User not found</div>
  }

 
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault()

      const fetch = async ()=>{
        try{
            setLoading(true)
            await userService.updateUser(user.id, user)
            setUser(initialleState)
        }catch(error){
            console.log(error)
        }
        finally{
            await new Promise(resolve => setTimeout(resolve, 3000))
            toast.success("User Updated Successfully")
            setLoading(false)
        }
        }
        fetch()
      }

        if (loading) {
    return <div className="flex flex-col justify-center items-center text-white min-h-screen">
        <Loader />
        < h1 className="text-2xl text-white">Updating Your Profile.....</h1>
        </div>
  }
  
  return (
    <>

<div className="flex justify-center items-center min-h-screen">
    <UserForm formdata={user} 
    handleChange={handleChange} 
    handleSubmit={handleSubmit} 
    loading={false}
    isEditMode={isEditMode} />
</div>

    <Toaster position="top-center" />
        </>
  )
}

export default Profile