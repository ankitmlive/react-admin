import React from "react"
import { Row, Col } from "reactstrap"
//import DomainLists from "./DomainList"
//import "../../assets/scss/pages/dashboard-analytics.scss"

class Cluster extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Row>
          <Col sm="12">
            {/* <DomainLists /> */}
            <h1>Hello Cluster</h1>
          </Col>
        </Row>
      </React.Fragment>
    )
  }
}

export default Cluster