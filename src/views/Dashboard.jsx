import React from "react";
// react plugin used to create charts
import { Pie } from "react-chartjs-2";
// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  Row,
  Col,
} from "reactstrap";
// core components
import { dashboardEmailStatisticsChart } from "variables/charts.jsx";

class Dashboard extends React.Component {
  render() {
    return (
      <>
        <div className="content">
          <Row>
            <Col lg="3" md="6" sm="6">
              <Card className="card-stats">
                <CardBody>
                  <Row>
                    <Col md="4" xs="5">
                      <div className="icon-big text-center icon-warning">
                        <i className="nc-icon nc-globe text-warning" />
                      </div>
                    </Col>
                    <Col md="8" xs="7">
                      <div className="numbers">
                        <p className="card-category">HDXTS</p>
                        <CardTitle tag="p">07</CardTitle>
                        <p />
                      </div>
                    </Col>
                  </Row>
                </CardBody>
                <CardFooter>
                  <hr />
                  <div className="stats">
                    <div className="text-center">
                      <i className="nc-icon nc-tap-01" />
                      <a href="/admin/events" class="stretched-link-info">
                        Show events
                      </a>
                      <br />
                    </div>
                  </div>
                </CardFooter>
              </Card>
            </Col>
            <Col lg="3" md="6" sm="6">
              <Card className="card-stats">
                <CardBody>
                  <Row>
                    <Col md="4" xs="5">
                      <div className="icon-big text-center icon-warning">
                        <i className="nc-icon nc-money-coins text-success" />
                      </div>
                    </Col>
                    <Col md="8" xs="7">
                      <div className="numbers">
                        <p className="card-category">Scheduling</p>
                        <CardTitle tag="p">05</CardTitle>
                        <p />
                      </div>
                    </Col>
                  </Row>
                </CardBody>
                <CardFooter>
                  <hr />
                  <div className="stats">
                    <div className="text-center">
                      <i className="nc-icon nc-tap-01" />
                      <a href="/admin/events" class="stretched-link-info">
                        Show events
                      </a>
                      <br />
                    </div>
                  </div>
                </CardFooter>
              </Card>
            </Col>
            <Col lg="3" md="6" sm="6">
              <Card className="card-stats">
                <CardBody>
                  <Row>
                    <Col md="4" xs="5">
                      <div className="icon-big text-center icon-warning">
                        <i className="nc-icon nc-money-coins text-success" />
                      </div>
                    </Col>
                    <Col md="8" xs="7">
                      <div className="numbers">
                        <p className="card-category">Regestration</p>
                        <CardTitle tag="p">11</CardTitle>
                        <p />
                      </div>
                    </Col>
                  </Row>
                </CardBody>
                <CardFooter>
                  <hr />
                  <div className="stats">
                    <div className="text-center">
                      <i className="nc-icon nc-tap-01" />
                      <a
                        href="/admin/events"
                        class="stretched-link-info"
                        style={{ position: "relative" }}
                      >
                        Show events
                      </a>
                      <br />
                    </div>
                  </div>
                </CardFooter>
              </Card>
            </Col>

            <Col lg="3" md="6" sm="6">
              <Card className="card-stats">
                <CardBody>
                  <Row>
                    <Col md="4" xs="5">
                      <div className="icon-big text-center icon-warning">
                        <i className="nc-icon nc-vector text-danger" />
                      </div>
                    </Col>
                    <Col md="8" xs="7">
                      <div className="numbers">
                        <p className="card-category">CPA</p>
                        <CardTitle tag="p">13</CardTitle>
                        <p />
                      </div>
                    </Col>
                  </Row>
                </CardBody>
                <CardFooter>
                  <hr />
                  <div className="stats">
                    <div className="text-center">
                      <i className="nc-icon nc-tap-01" />
                      <a href="/admin/events" class="stretched-link-info">
                        Show events
                      </a>
                      <br />
                    </div>
                  </div>
                </CardFooter>
              </Card>
            </Col>
            <Col lg="3" md="6" sm="6">
              <Card className="card-stats">
                <CardBody>
                  <Row>
                    <Col md="4" xs="5">
                      <div className="icon-big text-center icon-warning">
                        <i className="nc-icon nc-favourite-28 text-primary" />
                      </div>
                    </Col>
                    <Col md="8" xs="7">
                      <div className="numbers">
                        <p className="card-category">CCM</p>
                        <CardTitle tag="p">01</CardTitle>
                        <p />
                      </div>
                    </Col>
                  </Row>
                </CardBody>
                <CardFooter>
                  <hr />
                  <div className="stats">
                    <div className="text-center">
                      <i className="nc-icon nc-tap-01" />
                      <a
                        href="/admin/events"
                        class="stretched-link-info"
                        style={{ position: "relative" }}
                      >
                        Show events
                      </a>
                      <br />
                    </div>
                  </div>
                </CardFooter>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col md="7">
              <Card>
                <CardHeader>
                  <CardTitle tag="h5">Event Statistics</CardTitle>
                </CardHeader>
                <CardBody>
                  <Pie
                    data={dashboardEmailStatisticsChart.data}
                    options={dashboardEmailStatisticsChart.options}
                  />
                </CardBody>
                <CardFooter>
                  <div className="legend">
                    <i className="fa fa-circle text-primary" /> HDXTS{" "}
                    <i className="fa fa-circle text-warning" /> Regestration{" "}
                    <i className="fa fa-circle text-danger" /> CCM{" "}
                    <i className="fa fa-circle text-info" /> CPA{" "}
                    <i className="fa fa-circle text-gray" /> HIM
                  </div>
                  <hr />
                  <div className="stats">
                    <i className="fa fa-calendar" />
                    Number of Events
                  </div>
                </CardFooter>
              </Card>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}

export default Dashboard;
