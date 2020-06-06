import React from "react";

import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Table,
  Row,
  Col,
} from "reactstrap";

class Tables extends React.Component {
  render() {
    return (
      <>
        <div className="content">
          <Row>
            <Col md="12">
              <Card>
                <CardHeader>
                  <CardTitle tag="h4">Revenue Cycle Management </CardTitle>
                  <p className="card-category">
                    Cerner’s Revenue Cycle Management solutions and services
                    help organizations use automation to streamline operations,
                    reduce administrative functions, control the cost to
                    collect, make sound business decisions and, ultimately, work
                    to create healthier financial outcomes across acute and
                    ambulatory venues.
                  </p>
                </CardHeader>
                <CardBody>
                  <Table responsive>
                    <thead className="text-primary">
                      <tr>
                        <th className="text-center">PILLARS</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="text-center">HDXTS</td>
                      </tr>
                      <tr>
                        <td className="text-center">REGISTRATION</td>
                      </tr>
                      <tr>
                        <td className="text-center">CCM</td>
                      </tr>
                      <tr>
                        <td className="text-center">HIM</td>
                      </tr>
                      <tr>
                        <td className="text-center">SCHEDULING</td>
                      </tr>
                      <tr>
                        <td className="text-center">CPA</td>
                      </tr>
                    </tbody>
                  </Table>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}

export default Tables;
