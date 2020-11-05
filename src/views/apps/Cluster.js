import React from "react"
import {Card, CardHeader, CardTitle, Table} from "reactstrap"
import axios from "axios"

class Cluster extends React.Component {

  state = {
    clusterLists: [],
    isLoading: true,
    errors: null
  };

  // Now we're going to make a request for data using axios
  getCluster() {
    axios
      .get("https://cp.georadius.in/console_result.php?&action=search_cluster&cluster_name=&cluster_location=&rand=539798834")
      // Once we get a response and store data, let's change the loading state
      .then(response => {
        this.setState({
          clusterLists: response.data.data,
          isLoading: false
        });
      })
      // If we catch any errors connecting, let's update accordingly
      .catch(error => this.setState({ error, isLoading: false }));
  }

  componentDidMount() {
    this.getCluster();
  }

  render() {
    const { isLoading, clusterLists } = this.state;
    console.log(clusterLists);
    return (
      <Card>
        <CardHeader>
          <CardTitle>Cluster</CardTitle>
        </CardHeader>
        <Table
          responsive
          className="dashboard-table table-hover-animation mb-0 mt-1"
        >
          <thead>
            <tr>
              <th>Cluster Name</th>
              <th>Cluster Location</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {clusterLists.map((value, index) => {
              return (
                    <tr key={index}>
                      <td>{value.cluster_id}</td>
                      <td>{value.cluster_name}</td>
                      <td>{value.cluster_location}</td>
                      <td>{value.status}</td>
                    </tr>
                )
            })}
          </tbody>
        </Table>
      </Card>
    )
  }
}
export default Cluster
