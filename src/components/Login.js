import React from "react";
import {useState } from "react";
import axios from "axios";
import {setUserSession} from "../utils/Common";

const Login = (props) =>{
    const [email, setEmail]= useState('');
    const [password, setPassword]= useState('');
    const [error, setError]= useState(null);
    const [loading, setLoading]= useState(false);

    const submitHandler = ()=>{
        setError(null);
        setLoading(true);
        axios.post('https://10.100.17.47/FairEx/api/v1/admin/login',{
            email: email,
            password: password
        }).then(response => {
            console.log(response);
            setLoading(false);
            setUserSession(response.data.access_token, response.data.user);
            props.history.push('/components/dashboard')
            // console.log('response >>> ',response)
        }).catch(error=>{
            setLoading(false);
            if(error.response.status === 401 || error.response.status === 400){
                setError("Wrong Email or Password! Please try again.");
            }      
            else{
                setError('Invalid Email or Password! Please try again.')
            }
            // if(error.response.status === 422){
            //     setError(error.response.data.message);
            // }      
            // else{
            //     setError('Wrong email or password! Please try again.')
            // }
            // console.error('error >>> ',error)
        })
        // props.history.push('/components/dashboard');
    }

    return(
        <div>
            Login to get started!<br/><br/><br/>
            <div>
                Email<br/>
                <input 
                    type="email" 
                    value={email} 
                    onChange={(e)=>setEmail(e.target.value)}
                />
            </div>
            <div>
                Password<br/>
                <input 
                    type="password" 
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}
                />
            </div>
            <br/>
            {
                error && <p className="error">{error}</p> 
            }
            <input 
                type="button" 
                value={loading? "Loading..." : "Login"}
                disable={loading}
                onClick={submitHandler} 
            />
        </div>
    )
}

export default Login;