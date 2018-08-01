import React, {Component} from 'react'
import { Button } from 'semantic-ui-react'
import { Card, Icon, Image } from 'semantic-ui-react'

const Cards = (props) => {
  const plant = {
    name: props.Name,
    description: props.Description,
    imgUrl: props.Image
  }

  return (
  <Card id='card'>
    <Image id="imgPic" src={props.Image} />
    <Card.Content>
      <Card.Header>{props.Name}</Card.Header>
      
      <Card.Description>{props.Description}</Card.Description>
    </Card.Content>
    <Card.Content extra>
    <Button onClick={(event) => props.addToGarden(event, plant)} positive>Add To Garden</Button>
    </Card.Content>
  </Card>
  )
}

export default Cards
