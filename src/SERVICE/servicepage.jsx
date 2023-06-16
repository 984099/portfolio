import React from 'react'
import './servicepage.css'
import ServiceCard from '../myComponents/service_card'

function ServicePage(props) {
    return (
        <>
            <div className='servicepage'>


                <h5>
                    services</h5>
                <h2>checkmy services</h2> 
                <ServiceCard alt="hiii"
                url="https://tristarhistory.org/img/tv/95/dora-explorer.jpg"title="hhhh"description="iiii"/>

                
                </div></>
    )
}
export default ServicePage