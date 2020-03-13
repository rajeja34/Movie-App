import React from "react";
import { Component } from "react";
import { Button, ButtonToolbar, Modal } from "react-bootstrap";
import PropTypes from "prop-types";
import "./App.css";
//import "../node_modules/bootstrap/dist/css/bootstrap.min.css" ;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: "Jordan Belfort",
      isLoggedIn: false,
      show: false
    };

    this.tick = this.tick.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.intervalHandle;
  }

  componentDidMount() {
    this.intervalHandle = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalHandle);
  }

  handleClick() {
    this.setState((state, props) => ({
      show: !state.show
    }));

    console.log("State loggedin value: " + this.state.isLoggedIn);
  }

  tick() {
    this.setState({
      data: new Date().toLocaleTimeString()
    });
  }

  render() {
    return (
      <div className="App">
        <h1>Hello World</h1>
        <h2>{this.state.data}</h2>
        <ButtonToolbar>
          <Button onClick={this.handleClick} variant="primary" size="lg" block>
            Primary
          </Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="success">Success</Button>
          <MessageAlert />
        </ButtonToolbar>
      </div>
    );
  }
}

class MessageAlert extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false
    };
    this.handleClose = this.handleClose.bind(this);
  }

  handleClose() {
    this.setState((state, props) => ({
      show: !state.show
    }));
  }

  render() {
    return (
      <>
        <ButtonToolbar>
          <Button onClick={this.handleClose} variant="secondary">
            Show Message
          </Button>
        </ButtonToolbar>
        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={this.handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}

export default App;
