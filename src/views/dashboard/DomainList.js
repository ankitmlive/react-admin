import React from "react"
import axios from "axios"
import {Card, CardHeader, CardTitle, Table, UncontrolledTooltip, Progress} from "reactstrap"

import avatar1 from "../../assets/img/portrait/small/avatar-s-5.jpg"
import avatar2 from "../../assets/img/portrait/small/avatar-s-7.jpg"
import avatar3 from "../../assets/img/portrait/small/avatar-s-10.jpg"
import avatar4 from "../../assets/img/portrait/small/avatar-s-8.jpg"
import avatar5 from "../../assets/img/portrait/small/avatar-s-1.jpg"
import avatar6 from "../../assets/img/portrait/small/avatar-s-2.jpg"
import avatar7 from "../../assets/img/portrait/small/avatar-s-3.jpg"
import avatar8 from "../../assets/img/portrait/small/avatar-s-4.jpg"

class DomainLists extends React.Component {

  state = {
    domainLists: [],
    isLoading: true,
    errors: null
  };

  // Now we're going to make a request for data using axios
  getDomain() {
    axios
      //.get("https://s3-us-west-2.amazonaws.com/s.cdpn.io/3/posts.json")
      .get("https://cp.georadius.in/console_result.php?action=consolidated_vehicle_count&date_from=2020-10-27&date_to=2020-10-27&rand=160781184")
      // Once we get a response and store data, let's change the loading state
      .then(response => {
        this.setState({
          domainLists: response.data.posts,
          isLoading: false
        });
      })
      // If we catch any errors connecting, let's update accordingly
      .catch(error => this.setState({ error, isLoading: false }));
  }

  componentDidMount() {
    this.getDomain();
  }

  render() {
    const { isLoading, domainLists } = this.state;
    const elements = [{"instance_id":"6533","domain_name":"ais140.adititracking.com","active_vehicle_count":"0","billing_active_count":"0","total_count":"0","task_employee_count":"0","roster_employee_count":"0","total_dispatch":"0","status":"0"},{"instance_id":"6536","domain_name":"ais.georadius.in","active_vehicle_count":"0","billing_active_count":"67","total_count":"0","task_employee_count":"0","roster_employee_count":"0","total_dispatch":"0","status":"0"},{"instance_id":"6531","domain_name":"aistest.georadius.in","active_vehicle_count":"0","billing_active_count":"0","total_count":"0","task_employee_count":"0","roster_employee_count":"0","total_dispatch":"0","status":"0"},{"instance_id":"6544","domain_name":"amvtrack.com","active_vehicle_count":"0","billing_active_count":"2","total_count":"0","task_employee_count":"0","roster_employee_count":"0","total_dispatch":"0","status":"0"},{"instance_id":"6542","domain_name":"balajigps.com","active_vehicle_count":"0","billing_active_count":"0","total_count":"0","task_employee_count":"0","roster_employee_count":"0","total_dispatch":"0","status":"0"},{"instance_id":"6562","domain_name":"beta.georadius.in","active_vehicle_count":"0","billing_active_count":"0","total_count":"0","task_employee_count":"0","roster_employee_count":"0","total_dispatch":"0","status":"0"},{"instance_id":"6561","domain_name":"beta.gpsplatform.in","active_vehicle_count":"0","billing_active_count":"0","total_count":"0","task_employee_count":"0","roster_employee_count":"0","total_dispatch":"0","status":"0"},{"instance_id":"6540","domain_name":"dakshgps.in","active_vehicle_count":"0","billing_active_count":"143","total_count":"0","task_employee_count":"0","roster_employee_count":"0","total_dispatch":"0","status":"0"},{"instance_id":"6550","domain_name":"dashmeshsmartgps.com","active_vehicle_count":"0","billing_active_count":"11","total_count":"0","task_employee_count":"0","roster_employee_count":"0","total_dispatch":"0","status":"0"},{"instance_id":"6564","domain_name":"doordrishti.co","active_vehicle_count":"0","billing_active_count":"290","total_count":"0","task_employee_count":"0","roster_employee_count":"0","total_dispatch":"0","status":"0"},{"instance_id":"6534","domain_name":"eeragpsserver.com","active_vehicle_count":"0","billing_active_count":"0","total_count":"0","task_employee_count":"0","roster_employee_count":"0","total_dispatch":"0","status":"0"},{"instance_id":"6557","domain_name":"gabriel.georadius.in","active_vehicle_count":"0","billing_active_count":"11","total_count":"0","task_employee_count":"0","roster_employee_count":"0","total_dispatch":"0","status":"0"},{"instance_id":"6560","domain_name":"lite.traqr.com","active_vehicle_count":"0","billing_active_count":"9","total_count":"0","task_employee_count":"0","roster_employee_count":"0","total_dispatch":"0","status":"0"},{"instance_id":"6539","domain_name":"myscada.online","active_vehicle_count":"0","billing_active_count":"0","total_count":"0","task_employee_count":"0","roster_employee_count":"0","total_dispatch":"0","status":"0"},{"instance_id":"6535","domain_name":"phoneixweb.com","active_vehicle_count":"0","billing_active_count":"34","total_count":"0","task_employee_count":"0","roster_employee_count":"0","total_dispatch":"0","status":"0"},{"instance_id":"6548","domain_name":"plus.livetrace.live","active_vehicle_count":"0","billing_active_count":"26","total_count":"0","task_employee_count":"0","roster_employee_count":"0","total_dispatch":"0","status":"0"},{"instance_id":"6541","domain_name":"roadlinksecuritysystem.com","active_vehicle_count":"0","billing_active_count":"450","total_count":"0","task_employee_count":"0","roster_employee_count":"0","total_dispatch":"0","status":"0"},{"instance_id":"6555","domain_name":"securewheels.co.in","active_vehicle_count":"0","billing_active_count":"83","total_count":"0","task_employee_count":"0","roster_employee_count":"0","total_dispatch":"0","status":"0"},{"instance_id":"6528","domain_name":"syntrack.co.in","active_vehicle_count":"0","billing_active_count":"34","total_count":"0","task_employee_count":"0","roster_employee_count":"0","total_dispatch":"0","status":"0"},{"instance_id":"6532","domain_name":"track.gpstricity.in","active_vehicle_count":"0","billing_active_count":"0","total_count":"0","task_employee_count":"0","roster_employee_count":"0","total_dispatch":"0","status":"0"},{"instance_id":"6554","domain_name":"track.grapes.net.in","active_vehicle_count":"0","billing_active_count":"0","total_count":"0","task_employee_count":"0","roster_employee_count":"0","total_dispatch":"0","status":"0"},{"instance_id":"6558","domain_name":"trackingmandu.com","active_vehicle_count":"0","billing_active_count":"0","total_count":"0","task_employee_count":"0","roster_employee_count":"0","total_dispatch":"0","status":"0"},{"instance_id":"6538","domain_name":"tracking.trackinindia.in","active_vehicle_count":"0","billing_active_count":"58","total_count":"0","task_employee_count":"0","roster_employee_count":"0","total_dispatch":"0","status":"0"},{"instance_id":"6527","domain_name":"tracknovate.co.in","active_vehicle_count":"0","billing_active_count":"0","total_count":"0","task_employee_count":"0","roster_employee_count":"0","total_dispatch":"0","status":"0"},{"instance_id":"6563","domain_name":"track.sikkaenterprises.com","active_vehicle_count":"0","billing_active_count":"12","total_count":"0","task_employee_count":"0","roster_employee_count":"0","total_dispatch":"0","status":"0"},{"instance_id":"6559","domain_name":"track.streettracking.com","active_vehicle_count":"0","billing_active_count":"44","total_count":"0","task_employee_count":"0","roster_employee_count":"0","total_dispatch":"0","status":"0"},{"instance_id":"6547","domain_name":"track.thukralelectricbikes.com","active_vehicle_count":"0","billing_active_count":"149","total_count":"0","task_employee_count":"0","roster_employee_count":"0","total_dispatch":"0","status":"0"},{"instance_id":"6549","domain_name":"wgtracking.in","active_vehicle_count":"0","billing_active_count":"1","total_count":"0","task_employee_count":"0","roster_employee_count":"0","total_dispatch":"0","status":"0"},{"instance_id":"6556","domain_name":"www.gps.oodak.com","active_vehicle_count":"0","billing_active_count":"5","total_count":"0","task_employee_count":"0","roster_employee_count":"0","total_dispatch":"0","status":"0"}];
    return (
      <Card>
        <CardHeader>
          <CardTitle>Domain Listing</CardTitle>
        </CardHeader>
        <Table
          responsive
          className="dashboard-table table-hover-animation mb-0 mt-1"
        >
          <thead>
            <tr>
              <th>Domain Name</th>
              <th>Company ID</th>
              <th>Active Vehicle</th>
              <th>Billing Vehicle</th>
              <th>Total Vehicle</th>
              <th>Geotask Employee</th>
              <th>GeoRoster Employee</th>
              <th>GeoFleet Dispatch</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {elements.map((value, index) => {
              return (
                    <tr>
                     <td key={index}>{value.domain_name}</td>
                      <td key={index}>{value.instance_id}</td>
                      <td key={index}>{value.active_vehicle_count}</td>
                      <td key={index}>{value.billing_active_count}</td>
                      <td key={index}>{value.total_count}</td>
                      <td key={index}>{value.task_employee_count}</td>
                      <td key={index}>{value.roster_employee_count}</td>
                      <td key={index}>{value.total_dispatch}</td>
                      <td key={index}>{value.status}</td>
                    </tr>
                )
            })}
          </tbody>
        </Table>
      </Card>
    )
  }
}
export default DomainLists
