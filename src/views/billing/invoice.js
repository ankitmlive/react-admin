import React from "react"
import axios from "axios"
import {Card, CardHeader, CardTitle, Table} from "reactstrap"

class Invoice extends React.Component {

  state = {
    InvoiceLists: [],
    isLoading: true,
    errors: null
  };

  // Now we're going to make a request for data using axios
  getInvoices() {
    axios
      .get("https://cp.georadius.in/console_result.php?action=invoice_search&invoice_code=&user_id=&start_date=2020-11-06%2000:00:00&end_date=2020-11-06%2023:59:59&invoice_status=0&rand=1250672774")
      // Once we get a response and store data, let's change the loading state
      .then(response => {
        this.setState({
        InvoiceLists: response.data.data,
        isLoading: false
        });
      })
      // If we catch any errors connecting, let's update accordingly
      .catch(error => this.setState({ error, isLoading: false }));
  }

  componentDidMount() {
    this.getInvoices();
  }

  render() {
    const { isLoading, InvoiceLists } = this.state;
    console.log(InvoiceLists);
    return (
      <Card>
        <CardHeader>
          <CardTitle>Invoices</CardTitle>
        </CardHeader>
        <Table
          responsive
          className="dashboard-table table-hover-animation mb-0 mt-1"
        >
          <thead>
            <tr>
              <th>Invoice ID</th>
              <th>Email</th>
              <th>User</th>
              <th>Company</th>
              <th>Address</th>
              <th>Description</th>
              <th>Amount</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {InvoiceLists.map((value, index) => {
              return (
                    <tr key={index}>
                      <td>{value.invoice_id}</td>
                      <td>{value.email_id}</td>
                      <td>{value.user_name}</td>
                      <td>{value.company_name}</td>
                      <td>{value.address}</td>
                      <td>{value.note}</td>
                      <td>{value.total_amount}</td>
                      <td>{value.statement_date}</td>
                    </tr>
                )
            })}
          </tbody>
        </Table>
      </Card>
    )
  }
}
export default Invoice
