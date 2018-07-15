import React, { Component } from 'react'
import Cards from './Cards'

const Gardens = (props) => {
    const plants = props.plants ? props.plants.garden.map((plant, index) => {
        return<Cards            key={index}
                                Image={plant.imgUrl}
                                Name={plant.name}
                                Description={plant.description} />
    }) : null
    return (
        <section>
        <div className="cards">
        {plants}
        </div>
        </section>
    )
}

export default Gardens