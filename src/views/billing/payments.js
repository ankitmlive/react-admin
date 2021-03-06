import React from "react"
import { Row, Col } from "reactstrap"
import Breadcrumbs from "../../components/@vuexy/breadCrumbs/BreadCrumb"
import ListViewConfig from "./datalist"
import PaymentViewConfig from "./paymentlist"
import queryString from "query-string"

class Payments extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Breadcrumbs
          breadCrumbTitle="Invoices"
          breadCrumbParent="Billing"
          breadCrumbActive="Payments"
        />
        <Row>
          <Col sm="12">
            <PaymentViewConfig parsedFilter={queryString.parse(this.props.location.search)}/>
          </Col>
        </Row>
        <Row>
          <Col sm="12">
            <ListViewConfig parsedFilter={queryString.parse(this.props.location.search)}/>
          </Col>
        </Row>
      </React.Fragment>
    )
  }
}

export default Payments