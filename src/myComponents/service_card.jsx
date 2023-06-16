import React from 'react'
import './service_card.css'
function ServiceCard(props)
{
    return (
        <>
        <div className='service_card'>
            <img src={props.url} alt={props.alt}/>
            <h1>
                {props.title}</h1>
            
            <p>{props.descriptiom}</p>
        </div>
        </>

    )
  
}
export default ServiceCard