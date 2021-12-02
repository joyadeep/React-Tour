import React,{ useState } from 'react'

export const Tourlist = ({data,removeTour}) => {
    const[readmore,setReadmore]=useState(false);
    return (
        <>
    <div className="tc-content">
              <div className="image">
              <img src={data.image} alt="place"></img>
              </div>
              <p className="p-title">{data.name}</p>
              <div className="desc">
                  <div className="d-content">
                      <div className="duration" style={{fontWeight:"600", fontSize:"20px", marginBottom:"10px"}}>{data.duration}</div>
                    {readmore?data.desc : `${data.desc.substring(0,200)}...` 
                    }
                    
                      <button className="toggle" onClick={()=>{setReadmore(!readmore)}}>
                         {readmore?"show less":"read more"}
                       </button>
                       </div>
                  <div className="d-price">$ {data.price}</div>
              </div>
              <button className="delete" onClick={()=> removeTour(data.id) }>Not Interested</button>
            </div>
            
        </>
    )
}
