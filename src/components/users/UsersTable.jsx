import React from 'react'
import { useState,useEffect } from 'react'
// import { getUsers } from '../../services/productServices'
import UserModal from './UserModal'


function UsersTable() {
    const [users,setUsers] = useState([])
    const [loading,setLoading] = useState(true)
    const [modal,setModal] = useState(false)
    const [selectedUserId,setSelectedUserId] = useState(null)
    useEffect(() => {
        getUsers()
        .then(data => {
            setUsers(data)
            setLoading(false)
        })
    },[])


  return (
    <div className="overflow-x-auto opacity-100">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <th>Name</th>
        <th>Job</th>
        <th>Favorite Color</th>
        <th></th>
      </tr>
    </thead>
    {users?.map((user)=>(<tbody key={user.id}>
      {/* row 1 */}
      <tr >
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src="/tailwind-css-component-profile-2@56w.png" alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">{user.firstName}</div>
              <div className="text-sm opacity-50"> {user.lastName}</div>
            </div>
          </div>
        </td>
        <td>
          Zemlak, Daniel and Leannon
          <br/>
        </td>
        <td>Purple</td>
        <th>
        <button className="btn btn-primary btn-xs" onClick={() => setSelectedUserId(user.id)}>details</button>
{selectedUserId === user.id && <UserModal user={user} close={() => setSelectedUserId(null)} />}
        </th>
      </tr>
      </tbody>))}
  </table>
  
</div>
  )
}

export default UsersTable