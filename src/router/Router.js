import React, { Suspense, lazy } from "react"
import { Router, Switch, Route } from "react-router-dom"
import { connect } from "react-redux"

// creating APPROUTE

class AppRouter extends React.Component {
    render () {
        return (
            <Router>
                <Switch>
                    <AppRoute path="/login" component={Login} fullLayout />
                </Switch>
            </Router>
        )
    }
}


export default AppRouter