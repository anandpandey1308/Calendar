import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import TextField from "@material-ui/core/TextField";

import {
  Card,
  CardHeader,
  CardTitle,
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
      startDate: new Date(),
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
  handleChange = (date) => {
    this.setState({
      startDate: date,
    });
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
                  <Button color="success" onClick={this.toggle}>
                    Register
                  </Button>
                </CardFooter>
              </Card>
            </Col>
          </Row>

          <Modal isOpen={this.state.modal} toggle={this.toggle}>
            <ModalHeader toggle={this.toggle}>Event Registration</ModalHeader>
            <ModalBody>
              <Form>
                <FormGroup row>
                  <Label for="eventName" sm={2}>
                    Event Name
                  </Label>
                  <Col sm={10}>
                    <TextField
                      placeholder="Event Name"
                      label="Event Name"
                      variant="outlined"
                      fullWidth
                      name="Event Name"
                      required
                    />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label for="date" sm={2}>
                    Date
                  </Label>
                  <Col sm={10}>
                    <DatePicker
                      selected={this.state.startDate}
                      onChange={this.handleChange}
                    />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label for="pillarType" sm={2}>
                    Choose Pillar
                  </Label>
                  <Col sm={10}>
                    <Input
                      type="select"
                      name="pillarType"
                      id="pillarType"
                      variant="outlined"
                    >
                      <option>Select..</option>
                      <option>HDXTS</option>
                      <option>CCM</option>
                      <option>CPA</option>
                      <option>ANALYTICS</option>
                      <option>SCHEDULING</option>
                      <option>REGISTRATION</option>
                      <option>HIM</option>
                    </Input>
                  </Col>
                </FormGroup>
              </Form>
            </ModalBody>
            <ModalFooter>
              <Button color="info" onClick={this.onClickRegister}>
                Register
              </Button>{" "}
              <Button color="danger" onClick={this.toggle}>
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
