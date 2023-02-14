import './UserTable.css'

const UserTable = (props)=>(
    <table className='container1'>
    <thead>
      <tr>
        <th>Name</th>
        <th>Username</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
        {props.users.length>0?(
            props.users.map((user)=>(
                <tr key={user.id}>
                        <td>{user.name}</td>
                        <td>{user.username}</td>
                        <td>
                        <button onClick={()=>{
                            props.editRow(user)
                        }} className="button muted-button">Edit</button>&nbsp;&nbsp;
                        <button onClick={()=>props.deleteUser(user.id)} className="button muted-button">Delete</button>
                        </td>
                    </tr>

            ))
            ):(
                <tr>
                    <td colSpan={3}>No users</td>
                </tr>
            )
        }
      
    </tbody>
  </table>
);

export default UserTable;