import {React, useEffect, useState} from "react";
import axios from "axios";

function Warehouse(){

    const[products,setProducts]=useState([]);

    const apiLink ='https://10.100.17.47/FairEx/api/v1/admin/warehouse'
    useEffect(()=>{
        axios.get(apiLink)
        .then(response=>{
            setProducts(response)
        })
    },[apiLink])

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
            {/* <select>
                <option disable selected>---Select---</option>
                {
                    products.map((product)=>{
                        return( 
                            <option title={product.id}>{product.name}</option>
                        )
                    })
                    
                } 
            </select> */}
        </div>

    )
}
export default Warehouse;