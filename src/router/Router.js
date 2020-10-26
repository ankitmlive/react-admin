import React, { Suspense, lazy } from "react"
import { Router, Switch, Route } from "react-router-dom"
import { connect } from "react-redux"
import { history } from "../history"
import { ContextLayout } from "../utility/Layout"
import Spinner from "../components/@vuexy/spinner/Loading-spinner"

// import all components
//const register = lazy(() => import("../views/pages/auth/register/Register"))
const Login = lazy(() => import("../views/pages/auth/login/Login"))
const Dashboard = lazy(() =>import("../views/dashboard/analytics/AnalyticsDashboard"))

// Set Layout and Component Using App Route
const RouteConfig = ({ component: Component, fullLayout, ...rest }) => (
    <Route
      {...rest}
      render={props => {
        return (
          <ContextLayout.Consumer>
            {context => {
              let LayoutTag =
                fullLayout === true
                  ? context.fullLayout
                  : context.state.activeLayout === "horizontal"
                  ? context.horizontalLayout
                  : context.VerticalLayout
              return (
                <LayoutTag {...props} permission={props.user}>
                  <Suspense fallback={<Spinner />}>
                    <Component {...props} />
                  </Suspense>
                </LayoutTag>
              )
            }}
          </ContextLayout.Consumer>
        )
      }}
    />
  )
const mapStateToProps = state => {
    return {
      user: state.auth.login.userRole
    }
  }
  
const AppRoute = connect(mapStateToProps)(RouteConfig)

class AppRouter extends React.Component {
    render () {
        return (
            <Router history={history}>
                <Switch>
                    <AppRoute exact path="/dash" component={Dashboard} />
                    <AppRoute path="/login" component={Login} fullLayout />
                    {/* <AppRoute path="/register" component={register} fullLayout /> */}
                </Switch>
            </Router>
        )
    }
}


export default AppRouter