import React, { useEffect, useState } from "react";

function GitHub(){
 const [data,SetData]= useState([])
    useEffect(()=>{
        fetch('https://api.github.com.users.hiteshchaudhary')
        .then(Response=>Response.json())
        .then(data=>{
            console.log(data)
            SetData(data)
        })
        
    },[])
    return(
        <div className="text-center bg-gray-600 m-4 p-4 text-white text-3xl">Github Followers :{data.folowers} 
        <img src={data.avatar_url} alt="Git picture" width={300} />
        </div>
    )
}

export default GitHub