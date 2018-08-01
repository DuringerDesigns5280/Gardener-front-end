import React, {Component} from 'react'
import { Button } from 'semantic-ui-react'
import { Card, Icon, Image } from 'semantic-ui-react'

const GardenCards = (props) => {
        const id = props.id
      return(
  <Card id='card'>
    <Image id="imgPic" src={props.Image} />
    <Card.Content>
      <Card.Header>{props.Name}</Card.Header>
      
      <Card.Description>{props.Description}</Card.Description>
    </Card.Content>
    <Card.Content extra>
    <Button  onClick={(event) => props.deleteCard(event, id)} positive>Remove from Garden</Button>
    </Card.Content>
  </Card>
)
}

export default GardenCards
