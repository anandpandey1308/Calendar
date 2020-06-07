import React from "react";

import { Card, CardHeader, CardTitle, Row, Col } from "reactstrap";

class Tables extends React.Component {
  render() {
    return (
      <>
        <div className="content">
          <Row>
            <Col md="12">
              <Card>
                <CardHeader>
                  <CardTitle tag="h4">Upload the Events Here</CardTitle>
                  <p className="card-category">
                    Upload an Event happening for your Pillar.
                  </p>
                  <i className="text-right" nc-icon nc-button-play />
                </CardHeader>
              </Card>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}

export default Tables;
