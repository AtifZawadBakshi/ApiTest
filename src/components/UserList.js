import {React, useEffect, useState} from "react";
import axios from "axios";

function UserList(){
    const[users,setUsers]=useState([]);

    const apiLink ='https://10.100.17.47/FairEx/api/v1/admin/userList'
    useEffect(()=>{
        axios.get(apiLink)
        .then(response=>{
            setUsers(response)
        })
    },[apiLink])

    // useEffect(()=>{
    //     fetch('https://10.100.17.47/FairEx/api/v1/admin/userList',
    //     {
    //         method: 'GET',
    //         headers: {
    //             'Content-Type': 'application/json'
    //         }
    //     })
    //     .then((response)=>{response.json()})
    //     .then((response)=>{setUsers(response)})
    // }  )
    return(
        <div className="textheader">
            Available Users:
            <br/>
            <select>
                <option disable selected>---Select---</option>
                {/* {
                    users.map((user)=>{
                        return( 
                            <option title={user.id}>{user.name}</option>
                        )
                    })
                    
                }  */}
            </select>
        </div>

    )
}
export default UserList;