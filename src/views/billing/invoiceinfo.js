import React from "react"
//import axios from "axios"
//import {Card, CardHeader, CardTitle, Table} from "reactstrap"

class InvoiceInfo extends React.Component {

    state = {
        user : 0,
        isLoading: true,
        errors: null
    };

    componentDidMount() {
        const { match: { params } } = this.props;
        this.user = params.id
        console.log(this.user)
      
        // axios.get(`/api/users/${params.id}`)
        //   .then(({ data: user }) => {
        //     console.log('user', user);
        //   });
    }

    render() {
        return (
            <h1>Hello world{this.user}</h1>
        )
    }
}

export default InvoiceInfo