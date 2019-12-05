import React from 'react';
import Button from 'react-bootstrap/Button';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import Card from 'react-bootstrap/Card';
import logo from './logo.svg';
import './App.css';
import Bubble from './components/Bubble';

function App() {
  return (
    <div className="App">
      <Bubble radius="300" price={1000} color="red" />
      <Bubble radius="200" price={500} color="#00ff00"/>
      <Bubble radius="100" price={20} color="rgba(0,0,255,0.5)"/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          This is Sarah's project
        </p>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/colorful-of-dahlia-pink-flower-in-beautiful-garden-royalty-free-image-825886130-1554743243.jpg" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk of
              the card's content.
            </Card.Text>
            <Button className="abc" variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
        <ButtonToolbar>
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="success">Success</Button>
          <Button variant="warning">Warning</Button>
          <Button variant="danger">Danger</Button>
          <Button variant="info">Info</Button>
          <Button variant="light">Light</Button>
          <Button variant="dark">Dark</Button>
          <Button variant="link">Link</Button>
        </ButtonToolbar>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React ghjk
        </a>
      </header>
    </div>
  );
}

export default App;
