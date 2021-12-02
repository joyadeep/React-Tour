import React, { useState } from 'react'
import "./tourbody.css";
import {data} from '../../api/data';
import { Tourlist } from '../tourlist/Tourlist';
export const Tourbody = () => {
    const[ndata,setNdata]=useState(data);

    const removeTour=(id)=>{
      const newTour= ndata.filter((tour)=>tour.id!==id);
      setNdata(newTour);

    }
   
    return (

        <>
        <div className="t-container">
            <div className="tc-title">Best Destination
          
            </div>
            {ndata.length===0?"No data to show":""}
            
          
            
            {
              ndata.map((item,index)=>{
                return(
                <Tourlist key={index} data={item} removeTour={removeTour} />
                )
              })
            }
        </div>
            
        </>
    )
}
