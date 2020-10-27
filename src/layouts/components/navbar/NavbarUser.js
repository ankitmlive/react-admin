import React from "react"
import {
  NavItem,
  NavLink,
  UncontrolledDropdown,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
  Media,
  Badge
} from "reactstrap"
import PerfectScrollbar from "react-perfect-scrollbar"
import axios from "axios"
import classnames from "classnames"
import * as Icon from "react-feather"
import { history } from "../../../history"
import ReactCountryFlag from "react-country-flag"
import { IntlContext } from "../../../utility/Internationalization"
//import Autocomplete from "../../../components/@vuexy/autoComplete/AutoCompleteComponent"
//import { useAuth0 } from "../../../authServices/auth0/auth0Service"

const handleNavigation = (e, path) => {
  e.preventDefault()
  history.push(path)
}

const UserDropdown = props => {
  //const { logout, isAuthenticated } = useAuth0()
  const { logout, isAuthenticated } = true
  return (
    <DropdownMenu right>
      <DropdownItem
        tag="a"
        href="#"
        onClick={e => handleNavigation(e, "/pages/profile")}
      >
        <Icon.User size={14} className="mr-50" />
        <span className="align-middle">Edit Profile</span>
      </DropdownItem>
      <DropdownItem
        tag="a"
        href="#"
        onClick={e => handleNavigation(e, "/email/inbox")}
      >
        <Icon.Mail size={14} className="mr-50" />
        <span className="align-middle">My Inbox</span>
      </DropdownItem>
      <DropdownItem
        tag="a"
        href="#"
        onClick={e => handleNavigation(e, "/todo/all")}
      >
        <Icon.CheckSquare size={14} className="mr-50" />
        <span className="align-middle">Tasks</span>
      </DropdownItem>
      <DropdownItem
        tag="a"
        href="#"
        onClick={e => handleNavigation(e, "/chat")}
      >
        <Icon.MessageSquare size={14} className="mr-50" />
        <span className="align-middle">Chats</span>
      </DropdownItem>
      <DropdownItem tag="a" href="#" onClick={e => handleNavigation(e, "/ecommerce/wishlist")}>
        <Icon.Heart size={14} className="mr-50" />
        <span className="align-middle">WishList</span>
      </DropdownItem>
      <DropdownItem divider />
      <DropdownItem
        tag="a"
        href="/pages/login"
        onClick={e => {
          e.preventDefault()
          if (isAuthenticated) {
            return logout({
              returnTo: window.location.origin + process.env.REACT_APP_PUBLIC_PATH
            })
          } else {
            const provider = props.loggedInWith
            if (provider !== null) {
              if (provider === "jwt") {
                return props.logoutWithJWT()
              }
              if (provider === "firebase") {
                return props.logoutWithFirebase()
              }
            } else {
              history.push("/pages/login")
            }
          }

        }}
      >
        <Icon.Power size={14} className="mr-50" />
        <span className="align-middle">Log Out</span>
      </DropdownItem>
    </DropdownMenu>
  )
}

class NavbarUser extends React.PureComponent {
  state = {
    navbarSearch: false,
    langDropdown: false,
    suggestions: []
  }

  componentDidMount() {
    axios.get("/api/main-search/data").then(({ data }) => {
      this.setState({ suggestions: data.searchResult })
    })
  }

  handleNavbarSearch = () => {
    this.setState({
      navbarSearch: !this.state.navbarSearch
    })
  }

  handleLangDropdown = () =>
    this.setState({ langDropdown: !this.state.langDropdown })

  render() {
    return (
      <ul className="nav navbar-nav navbar-nav-user float-right">
        <IntlContext.Consumer>
          {context => {
            let langArr = {
              "en" : "English",
              "de" : "German",
              "fr" : "French",
              "pt" : "Portuguese"
            }
            return (
              <Dropdown
                tag="li"
                className="dropdown-language nav-item"
                isOpen={this.state.langDropdown}
                toggle={this.handleLangDropdown}
                data-tour="language"
              >
                <DropdownToggle
                  tag="a"
                  className="nav-link"
                >
                  <ReactCountryFlag
                  className="country-flag"
                    countryCode={
                      context.state.locale === "en"
                        ? "us"
                        : context.state.locale
                    }
                    svg
                  />
                  <span className="d-sm-inline-block d-none text-capitalize align-middle ml-50">
                    {langArr[context.state.locale]}
                  </span>
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem
                    tag="a"
                    onClick={e => context.switchLanguage("en")}
                  >
                    <ReactCountryFlag className="country-flag" countryCode="us" svg />
                    <span className="ml-1">English</span>
                  </DropdownItem>
                  <DropdownItem
                    tag="a"
                    onClick={e => context.switchLanguage("fr")}
                  >
                    <ReactCountryFlag className="country-flag" countryCode="fr" svg />
                    <span className="ml-1">French</span>
                  </DropdownItem>
                  <DropdownItem
                    tag="a"
                    onClick={e => context.switchLanguage("de")}
                  >
                    <ReactCountryFlag className="country-flag" countryCode="de" svg />
                    <span className="ml-1">German</span>
                  </DropdownItem>
                  <DropdownItem
                    tag="a"
                    onClick={e => context.switchLanguage("pt")}
                  >
                    <ReactCountryFlag className="country-flag" countryCode="pt" svg />
                    <span className="ml-1">Portuguese</span>
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
            )
          }}
        </IntlContext.Consumer>

        <NavItem className="nav-search" onClick={this.handleNavbarSearch}>
          <NavLink className="nav-link-search">
            <Icon.Moon size={21} data-tour="search" />
          </NavLink>
        </NavItem>

        <UncontrolledDropdown
          tag="li"
          className="dropdown-notification nav-item"
        >
          <DropdownToggle tag="a" className="nav-link nav-link-label">
            <Icon.Bell size={21} />
            <Badge pill color="primary" className="badge-up">
              {" "}
              5{" "}
            </Badge>
          </DropdownToggle>
          <DropdownMenu tag="ul" right className="dropdown-menu-media">
            <li className="dropdown-menu-header">
              <div className="dropdown-header mt-0">
                <h3 className="text-white">5 New</h3>
                <span className="notification-title">App Notifications</span>
              </div>
            </li>
            <PerfectScrollbar
              className="media-list overflow-hidden position-relative"
              options={{
                wheelPropagation: false
              }}
            >
              <div className="d-flex justify-content-between">
                <Media className="d-flex align-items-start">
                  <Media left href="#">
                    <Icon.PlusSquare
                      className="font-medium-5 primary"
                      size={21}
                    />
                  </Media>
                  <Media body>
                    <Media heading className="primary media-heading" tag="h6">
                      You have new order!
                    </Media>
                    <p className="notification-text">
                      Are your going to meet me tonight?
                    </p>
                  </Media>
                  <small>
                    <time
                      className="media-meta"
                      dateTime="2015-06-11T18:29:20+08:00"
                    >
                      9 hours ago
                    </time>
                  </small>
                </Media>
              </div>
              <div className="d-flex justify-content-between">
                <Media className="d-flex align-items-start">
                  <Media left href="#">
                    <Icon.DownloadCloud
                      className="font-medium-5 success"
                      size={21}
                    />
                  </Media>
                  <Media body>
                    <Media heading className="success media-heading" tag="h6">
                      99% Server load
                    </Media>
                    <p className="notification-text">
                      You got new order of goods?
                    </p>
                  </Media>
                  <small>
                    <time
                      className="media-meta"
                      dateTime="2015-06-11T18:29:20+08:00"
                    >
                      5 hours ago
                    </time>
                  </small>
                </Media>
              </div>
              <div className="d-flex justify-content-between">
                <Media className="d-flex align-items-start">
                  <Media left href="#">
                    <Icon.AlertTriangle
                      className="font-medium-5 danger"
                      size={21}
                    />
                  </Media>
                  <Media body>
                    <Media heading className="danger media-heading" tag="h6">
                      Warning Notification
                    </Media>
                    <p className="notification-text">
                      Server has used 99% of CPU
                    </p>
                  </Media>
                  <small>
                    <time
                      className="media-meta"
                      dateTime="2015-06-11T18:29:20+08:00"
                    >
                      Today
                    </time>
                  </small>
                </Media>
              </div>
              <div className="d-flex justify-content-between">
                <Media className="d-flex align-items-start">
                  <Media left href="#">
                    <Icon.CheckCircle
                      className="font-medium-5 info"
                      size={21}
                    />
                  </Media>
                  <Media body>
                    <Media heading className="info media-heading" tag="h6">
                      Complete the task
                    </Media>
                    <p className="notification-text">
                      One of your task is pending.
                    </p>
                  </Media>
                  <small>
                    <time
                      className="media-meta"
                      dateTime="2015-06-11T18:29:20+08:00"
                    >
                      Last week
                    </time>
                  </small>
                </Media>
              </div>
              <div className="d-flex justify-content-between">
                <Media className="d-flex align-items-start">
                  <Media left href="#">
                    <Icon.File className="font-medium-5 warning" size={21} />
                  </Media>
                  <Media body>
                    <Media heading className="warning media-heading" tag="h6">
                      Generate monthly report
                    </Media>
                    <p className="notification-text">
                      Reminder to generate monthly report
                    </p>
                  </Media>
                  <small>
                    <time
                      className="media-meta"
                      dateTime="2015-06-11T18:29:20+08:00"
                    >
                      Last month
                    </time>
                  </small>
                </Media>
              </div>
            </PerfectScrollbar>
            <li className="dropdown-menu-footer">
              <DropdownItem tag="a" className="p-1 text-center">
                <span className="align-middle">Read all notifications</span>
              </DropdownItem>
            </li>
          </DropdownMenu>
        </UncontrolledDropdown>
        <UncontrolledDropdown tag="li" className="dropdown-user nav-item">
          <DropdownToggle tag="a" className="nav-link dropdown-user-link">
            <div className="user-nav d-sm-flex d-none">
              <span className="user-name text-bold-600">
                {this.props.userName}
              </span>
              <span className="user-status">Available</span>
            </div>
            <span data-tour="user">
              <img
                src={this.props.userImg}
                className="round"
                height="40"
                width="40"
                alt="avatar"
              />
            </span>
          </DropdownToggle>
          <UserDropdown {...this.props} />
        </UncontrolledDropdown>
      </ul>
    )
  }
}
export default NavbarUser
