import {React, useEffect, useCallback, useState} from "react";
import axios from "axios";
import {getToken} from "../utils/Common";

const UserList=()=>{

    const[users,setUsers]=useState([]);

    // const[requestError,setRequestError]=useState();

    const token= getToken();

    // const authAxios= axios.create({
    //     baseUrl: 'https://10.100.17.47/FairEx/api/v1/admin/userList',
    //     headers: {
    //         Authrization: `Bearer ${token}`
    //     }
    // })
 
    axios.interceptors.request.use(
        config =>{
            config.headers.authorization= `Bearer ${token}`;
            return config;
        },
        error=>{
            return Promise.reject(error);
        }
    )

    // useEffect(()=>{
    //         useCallback(async(()=>{
    //             try{
    //                 const result= await axios.get('https://10.100.17.47/FairEx/api/v1/admin/userList');   
    //                 setUsers(result.data)
    //             }
    //             catch(err){
    //                 setRequestError(err.message);
    //             }
    //         }))
    // })

    // useEffect(() => {
    //     axios.get('https://10.100.17.47/FairEx/api/v1/admin/userList')
    //     .then((response) => {
    //         setUsers(response.data)
    //         console.log(response.data)
    //     })
    // })

    const fetchData = () => {
        axios.get('https://10.100.17.47/FairEx/api/v1/admin/userList')
        .then((response) => {
            console.log(response)
            setUsers(response.data.user.data)
            console.log(users)
        })
    }

    // const fetchData = useCallback(async()=>{
    //     try{
    //         const result= await axios.get('https://10.100.17.47/FairEx/api/v1/admin/userList');
    //         console.log(result)
    //         setUsers(result.data);
    //     }catch(e){
    //         setRequestError(e.message);
    //     }
    // })

    // useEffect(()=>{
    //     fetch('https://10.100.17.47/FairEx/api/v1/admin/userList',
    //     {
    //         method: 'GET',
    //         headers: {
    //             'Content-Type': 'application/json'
    //         }
    //     })
    //     .then((response)=>{setUsers(response.data)})
    // }  )
    

    return(
        <div className="textheader">
            Available Users:
            <br/>
            <select onClick={fetchData}>
                <option disable selected></option>
                {
                    users.map((x)=>{
                        return( 
                            <option title={x.id}>{x.name}</option>
                        )
                        console.log(x.name)
                    })
                    
                } 
            </select>
        </div>

    )
}
export default UserList;