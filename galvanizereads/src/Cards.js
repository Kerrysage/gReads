import React from 'react'
import { Button, Card, Image } from 'semantic-ui-react'

const Cards = () => (
  <Card.Group>
    <Card>
      <Card.Content>
        <Image floated='right' size='mini' src='https://covers.oreillystatic.com/images/0636920012610/lrg.jpg' />
        <Card.Header>Python in A Nutshell</Card.Header>
        <Card.Meta>Alex Martelli</Card.Meta>
        <Card.Description>
          Steve wants to add you to the group <strong>best friends</strong>
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className='ui two buttons'>
          <Button basic color='green'>
            Edit
          </Button>
          <Button basic color='red'>
            Delete
          </Button>
        </div>
      </Card.Content>
    </Card>
    <Card>
      <Card.Content>
        <Image floated='right' size='mini' src='https://covers.oreillystatic.com/images/0636920025696/lrg.jpg' />
        <Card.Header>Think Python</Card.Header>
        <Card.Meta>Allen B. Downey</Card.Meta>
        <Card.Description>
          Molly wants to add you to the group <strong>musicians</strong>
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className='ui two buttons'>
          <Button basic color='green'>
            Edit
          </Button>
          <Button basic color='red'>
            Delete
          </Button>
        </div>
      </Card.Content>
    </Card>
    <Card>
      <Card.Content>
        <Image floated='right' size='mini' src='https://covers.oreillystatic.com/images/0636920085270/lrg.jpg' />
        <Card.Header>Learning React Native</Card.Header>
        <Card.Meta>Bonnie Eisenman</Card.Meta>
        <Card.Description>Jenny requested permission to view your contact details</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className='ui two buttons'>
          <Button basic color='green'>
            Edit
          </Button>
          <Button basic color='red'>
            Delete
          </Button>
        </div>
      </Card.Content>
    </Card>
    <Card>
      <Card.Content>
        <Image floated='right' size='mini' src='https://covers.oreillystatic.com/images/0636920033769/lrg.jpg' />
        <Card.Header>You Don't Know: ES6 & Beyond</Card.Header>
        <Card.Meta>Kyle Simpson</Card.Meta>
        <Card.Description>Jenny requested permission to view your contact details</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className='ui two buttons'>
          <Button basic color='green'>
            Edit
          </Button>
          <Button basic color='red'>
            Delete
          </Button>
        </div>
      </Card.Content>
    </Card>
    <Card>
      <Card.Content>
        <Image floated='right' size='mini' src='https://covers.oreillystatic.com/images/0636920026327/lrg.jpg' />
        <Card.Header>You Don't Know JS: Scope & Closures</Card.Header>
        <Card.Meta>Kyle Simpson</Card.Meta>
        <Card.Description>Jenny requested permission to view your contact details</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className='ui two buttons'>
          <Button basic color='green'>
            Edit
          </Button>
          <Button basic color='red'>
            Delete
          </Button>
        </div>
      </Card.Content>
    </Card>
    <Card>
      <Card.Content>
        <Image floated='right' size='mini' src='https://covers.oreillystatic.com/images/0636920033752/lrg.jpg' />
        <Card.Header>You Don't Know JS: Async & Performance</Card.Header>
        <Card.Meta>Kyle Simpson</Card.Meta>
        <Card.Description>Jenny requested permission to view your contact details</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className='ui two buttons'>
          <Button basic color='green'>
            Edit
          </Button>
          <Button basic color='red'>
            Delete
          </Button>
        </div>
      </Card.Content>
    </Card>
  </Card.Group>
)

export default Cards