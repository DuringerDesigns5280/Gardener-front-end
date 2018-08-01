import React, { Component } from 'react'
import GardenCards from './GardenCards'



const MyGarden = (props) => {   
props.userGardens && console.log("MY", props.userGardens);
    
    const userGardens = props.userGardens ? props.userGardens.Mygarden.map((userGarden, index) => {
    return<GardenCards          key={index}
                                id={userGarden.id}
                                Image={userGarden.imgUrl}
                                Name={userGarden.name}
                                Description={userGarden.description}
                                deleteCard={props.deleteCard}
                
                                /> 
    }) : null
    return (
        <section>
        <div className="cards">
        {userGardens}
        </div>
        </section>
    )
}

export default MyGarden