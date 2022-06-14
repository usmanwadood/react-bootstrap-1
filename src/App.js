import 'bootstrap/dist/css/bootstrap.min.css'
import {Container, Row, Col, Card, Button, Alert, Navbar, Nav} from 'react-bootstrap'
import {FaHeart} from 'react-icons/fa'
import { useState } from 'react';
import './App.css';

const CardLayout = ({card_title, card_text, button_text, button_variant, img_src})=> {

  return (<Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src="logo192.png" />
    <Card.Body>
      <Card.Title>{card_title}</Card.Title>
      <Card.Text>
        {card_text}
      </Card.Text>
      <Button variant={button_variant}>{button_text}</Button>
    </Card.Body>
  </Card>)
}

const DismissibleAlert = ()=> {

  const [show, setShow ] = useState(true)

    if(show){
      return(
        <Alert key= 'success' onClose={() => setShow(false)} dismissible>
          <Alert.Heading>Good to see you here!</Alert.Heading>Go over to my {' '}
          <Alert.Link href="https://github.com/usmanwadood">Github</Alert.Link> for more projects!
        </Alert>
      )
    }

    return <Button style={{backgroundColor: 'red', border:'red', marginTop:'5px', marginLeft:'5px'}} onClick={() => setShow(true)}><FaHeart/></Button>
}

function App() {
  return (
    <>
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="https://github.com/usmanwadood">
          <img
            alt=""
            src="logo192.png"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{' '}
        Usman Wadood
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav>

      </Container>
    </Navbar>

    <DismissibleAlert />

    <Container>
      <Row style={{padding: '50px'}}>
        <Col>
          <CardLayout 
            img_src = "logo192.png" 
            card_title = 'Example Card One'
            button_text = 'Primary'
            button_variant = 'primary'
            card_text = "This is an example of a reusable react card component. It takes in props which help in customization of the cards!"

          />
        </Col>
        <Col>
          <CardLayout 
            img_src = "logo512.png" 
            card_title = 'Example Card Two'
            button_text = 'Secondary'
            button_variant = 'secondary'
            card_text = "This is an example of a reusable react card component. It takes in props which help in customization of the cards!"

          />
        </Col>
        <Col>
          <CardLayout 
            img_src = "logo192.png" 
            card_title = 'Example Card Three'
            button_text = 'Danger!'
            button_variant = 'danger'
            card_text = "This is an example of a reusable react card component. It takes in props which help in customization of the cards!"

          />
        </Col>
      </Row>
    </Container>
      
    </>
  );
}

export default App;
