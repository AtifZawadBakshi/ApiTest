import {React, useEffect, useState} from "react";
import axios from "axios";
import {getToken} from "../utils/Common";

function Warehouse(){

    const[products,setProducts]=useState([]);

    const token= getToken();
 
    axios.interceptors.request.use(
        config =>{
            config.headers.authorization= `Bearer ${token}`;
            return config
        }
    )

    // const apiLink ='https://10.100.17.47/FairEx/api/v1/admin/warehouse'
    // useEffect(()=>{
    //     axios.get(apiLink)
    //     .then(response=>{
    //         setProducts(response)
    //     })
    // },[apiLink])

    const fetchData = () => {
        axios.get('https://10.100.17.47/FairEx/api/v1/admin/warehouse')
        .then((response) => {
            console.log(response)
            setProducts(response.data)
            console.log(products)
        })
    }

    // useEffect(()=>{
    //     fetch('https://10.100.17.47/FairEx/api/v1/admin/warehouse',
    //     {
    //         method: 'GET',
    //         headers: {
    //             'Content-Type': 'application/json'
    //         }
    //     })
    //     .then((response)=>{response.json()})
    //     .then((response)=>{setProducts(response)})
    // }  )
    return(
        <div>
            Order Details from Warehouse:
            <br/>
            <select onClick={fetchData}>
                <option disable selected></option>
                {
                    products.map((product)=>{
                        return( 
                            <option title={product.id}>{product.name}</option>
                        )
                    })
                    
                } 
            </select>
        </div>

    )
}
export default Warehouse;