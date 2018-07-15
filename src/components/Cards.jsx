import React, {Component} from 'react'
import ButtonAdd from './ButtonAdd'
import { Card, Icon, Image } from 'semantic-ui-react'

const CardExampleCard = (props) => (
  <Card id='card'>
    <Image id="imgPic" src={props.Image} />
    <Card.Content>
      <Card.Header>{props.Name}</Card.Header>
      
      <Card.Description>{props.Description}</Card.Description>
    </Card.Content>
    <Card.Content extra>
    <ButtonAdd/>
    </Card.Content>
  </Card>
)

export default CardExampleCard
