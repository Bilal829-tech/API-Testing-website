import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Loader from '../components/loader'
import userService from '../services/userServices'


interface User {
  id: number
  first_name: string
  last_name: string
  email: string
  gender: string
}

function Users() {
  const [users, setUsers] = useState<User[]>([])
  const [loading, setLoading] = useState<boolean>(false)

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoading(true)
        const data = await userService.getAllUser()
        setUsers([...data].reverse())
      } catch (error) {
        console.log("Error:", error)
      } finally {
        await new Promise(resolve => setTimeout(resolve, 5000))
        setLoading(false)
      }
    }
    fetchUsers()
  }, [])


  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <Loader />
      </div>
    )
  }

  const deleteUser = async(id:number)=>{
      const confirmDelete = window.confirm(
    "Are you sure you want to delete this user?"
  );

  if (!confirmDelete) return;
    try{
      await userService.deleteUser(id)
      setUsers(users.filter(user => user.id !== id))
    }catch(error){
      console.log(error)
    }
  }
  return (
    <>
      <h1 className="text-2xl font-bold mb-4 text-center text-white pt-8">Users</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">

        {users.map(user => (
          <div key={user.id}>
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-4 rounded-xl text-white hover:cursor-pointer transition-all hover:-translate-y-1">
              <div className="flex justify-between items-center">
                <div>
                  <h2 className="text-lg font-semibold mb-1">{user.first_name} {user.last_name}</h2>
                </div>
                <div className="flex gap-2">
                  <Link to={`/profile/${user.id}`} className='border-2 py-1 px-3 bg-indigo-900 hover:cursor-pointer hover:scale-105 transition-all hover:-translate-y-1 rounded-2xl'>Edit</Link>
                  <button onClick={()=>deleteUser(user.id)} className='border-2 py-1 px-3 hover:bg-red-700 hover:cursor-pointer hover:scale-105 transition-all hover:-translate-y-1 rounded-2xl'>Delete</button>
                </div>
              </div>

              <p className="text-sm text-white/70">{user.email}</p>
              <p className="text-sm text-white/50">{user.gender}</p>
            </div>
          </div>
        ))}

      </div>
    </>
  )
}

export default Users