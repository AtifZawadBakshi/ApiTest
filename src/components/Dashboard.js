import React from "react";
import UserList from "./UserList";
import Warehouse from "./Warehouse";
import {removeUserSession, getUser} from "../utils/Common"

const Dashboard = (props) =>{

    const user =getUser();

    const handleLogout = () =>{
        removeUserSession();
        props.history.push('/components/login');
    }

    return(
        <>
            <div>
                Welcome Mr. {user.name}!<br/><br/>             
            </div>
            <div>
                <UserList/>
            </div>
            <div>
                <Warehouse/>
            </div>
            <br/><br/>
            <div>
            <input type="button" value='Logout' onClick={handleLogout}/>
            </div>
        </>    
    )
}

export default Dashboard;