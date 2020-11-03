import React from "react"
import * as Icon from "react-feather"
const navigationConfig = [
  {
    id: "user",
    title: "User",
    type: "collapse",
    icon: <Icon.Users size={20} />,
    badge: "warning",
    badgeText: "2",
    children: [
      {
        id: "manageuser",
        title: "Manage User",
        type: "item",
        icon: <Icon.Circle size={12} />,
        permissions: ["admin", "editor"],
        navLink: "/"
      },
      {
        id: "email",
        title: "Email",
        type: "item",
        icon: <Icon.Circle size={12} />,
        permissions: ["admin"],
        navLink: "/ecommerce-dashboard"
      }
    ]
  },
  {
    id: "reports",
    title: "Reports",
    type: "collapse",
    icon: <Icon.Database size={20} />,
    badge: "warning",
    badgeText: "2",
    children: [
      {
        id: "vehiclecount",
        title: "Vehicle Count",
        type: "item",
        icon: <Icon.Circle size={12} />,
        permissions: ["admin", "editor"],
        navLink: "/"
      },
      {
        id: "serverhealth",
        title: "Server Health",
        type: "item",
        icon: <Icon.Circle size={12} />,
        permissions: ["admin"],
        navLink: "/ecommerce-dashboard"
      }
    ]
  },
  {
    id: "billing",
    title: "Billing",
    type: "collapse",
    icon: <Icon.ShoppingBag size={20} />,
    badge: "warning",
    badgeText: "2",
    children: [
      {
        id: "invoice",
        title: "Invoice",
        type: "item",
        icon: <Icon.Circle size={12} />,
        permissions: ["admin", "editor"],
        navLink: "/"
      },
      {
        id: "invoicecount",
        title: "Invoice Count",
        type: "item",
        icon: <Icon.Circle size={12} />,
        permissions: ["admin"],
        navLink: "/ecommerce-dashboard"
      }
    ]
  },
  {
    id: "settings",
    title: "Settings",
    type: "collapse",
    icon: <Icon.Settings size={20} />,
    badge: "warning",
    badgeText: "2",
    children: [
      {
        id: "cluster",
        title: "Cluster",
        type: "item",
        icon: <Icon.Server size={12} />,
        permissions: ["admin", "editor"],
        navLink: "/cluster"
      },
      {
        id: "instance",
        title: "Instance",
        type: "item",
        icon: <Icon.Circle size={12} />,
        permissions: ["admin"],
        navLink: "/ecommerce-dashboard"
      },
      {
        id: "language",
        title: "Language",
        type: "item",
        icon: <Icon.Circle size={12} />,
        permissions: ["admin"],
        navLink: "/ecommerce-dashboard"
      },
      {
        id: "server",
        title: "Server",
        type: "item",
        icon: <Icon.Circle size={12} />,
        permissions: ["admin"],
        navLink: "/ecommerce-dashboard"
      }
    ]
  },
  {
    id: "logout",
    title: "Logout",
    type: "item",
    icon: <Icon.LogOut size={20} />,
    permissions: ["admin", "editor"],
    navLink: "/email/:filter",
    filterBase: "/email/inbox"
  },
]

export default navigationConfig
