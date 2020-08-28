import "./NewParkContainer.css";
import React, { Component, Fragment } from 'react';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input
} from 'reactstrap';
import CreatePark from '../../models/game';

class NewParkContainer extends React.Component {
  state = {
    Name: "",
    Team: "",
    coverArtUrl: "",
    Visited: false,
  };

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }
  onSubmit = e => {
    e.preventDefault();
    const newPark = {
      Name: "",
      Team: "",
      coverArtUrl: "",
      Visited: false,
    }
    // add item via additem action
    CreatePark.createPark(newPark);
    // close modal
    this.toggle();

  }
  render() {
    return (
      <Fragment>
        <Button
          color="dark"
          style={{ marginBottom: '2rem' }}
          onClick={this.toggle}
        >Add Park</Button>
        <Modal isOpen={this.state.modal}
          toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>Add Products</ModalHeader>
          <ModalBody>
            <Form onSubmit={this.onSubmit}>
              <FormGroup>
                <Label for="Name">Park Name</Label>
                <Input type="text" name="Name" id="name" placeholder="Park Name" onChange={this.onChange} />
                <Label for="team">Description</Label>
                <Input type="text" name="team" id="item" placeholder="Team Name" onChange={this.onChange} />
                <Label for="coverArtUrl">Link to Image</Label>
                <Input type="text" name="coverArtUrl" id="coverArtUrl" placeholder="Add Image Url" onChange={this.onChange} />
                <Label for="Visited">Have you been there?</Label>
                <Input type="checkbox" name="Visited" id="Visited" placeholder="Benn there, done that." onChange={this.onChange} />
                <Button color="dark" style={{ marginTop: '2rem' }} block>Add Park</Button>


              </FormGroup>
            </Form>
          </ModalBody>
        </Modal>
      </Fragment>
    )
  }
}

export default NewParkContainer;
