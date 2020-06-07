import React from "react";

import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Table,
  Button,
  CardFooter,
  Row,
  Col,
  Modal,
  ModalBody,
  ModalHeader,
  ModalFooter,
  Input,
  Form,
  FormGroup,
  Label,
} from "reactstrap";

class Tables extends React.Component {
  constructor() {
    super();
    this.state = {
      modal: false,
      eventName: "",
      date: "",
      pillar: "",
    };
    this.toggle = this.toggle.bind(this);
    this.onClickRegister = this.onClickRegister.bind(this);
  }

  toggle = () => {
    this.setState((prev) => {
      return { modal: !prev.modal };
    });
  };

  onClickRegister = () => {
    //add axios func here

    this.toggle();
  };

  render() {
    return (
      <>
        <div className="content">
          <Row>
            <Col md="12">
              <Card>
                <CardHeader>
                  <CardTitle tag="h4">Register for the Events</CardTitle>
                  <p className="card-category">
                    Register/Upload an Event happening for your Pillar.
                  </p>
                </CardHeader>
                <CardFooter>
                  <Button color="primary" onClick={this.toggle}>
                    Register
                  </Button>
                </CardFooter>
              </Card>
            </Col>
          </Row>

          <Modal isOpen={this.state.modal} toggle={this.toggle}>
            <ModalHeader toggle={this.toggle}>Register Event</ModalHeader>
            <ModalBody>
              <Form>
                <FormGroup row>
                  <Label for="eventName" sm={2}>
                    Event Name
                  </Label>
                  <Col sm={10}>
                    <Input
                      type="email"
                      name="eventName"
                      id="eventName"
                      placeholder="Event Name"
                      Label="Event Name"
                    />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label for="date" sm={2}>
                    Date
                  </Label>
                  <Col sm={10}>
                    <Input
                      type="text"
                      name="date"
                      id="date"
                      placeholder="Date"
                    />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label for="typePillar" sm={2}>
                    Type Pillar
                  </Label>
                  <Col sm={10}>
                    <Input type="select" name="typePillar" id="typePillar">
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                    </Input>
                  </Col>
                </FormGroup>
              </Form>
            </ModalBody>
            <ModalFooter>
              <Button color="primary" onClick={this.onClickRegister}>
                Register
              </Button>{" "}
              <Button color="secondary" onClick={this.toggle}>
                Cancel
              </Button>
            </ModalFooter>
          </Modal>
        </div>
      </>
    );
  }
}

export default Tables;
