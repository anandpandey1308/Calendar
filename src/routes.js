import Dashboard from "views/Dashboard.jsx";
import Icons from "views/Icons.jsx";
import TableList from "views/Tables.jsx";
import Register from "views/Register.jsx";
import Events from "views/Events.jsx";

var routes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "nc-icon nc-bank",
    component: Dashboard,
    layout: "/admin",
  },

  {
    path: "/tables",
    name: "Know your Pillar",
    icon: "nc-icon nc-tile-56",
    component: TableList,
    layout: "/admin",
  },

  {
    path: "/events",
    name: "Events",
    icon: "nc-icon nc-controller-modern",
    component: Events,
    layout: "/admin",
  },
  {
    path: "/register",
    name: "Register",
    icon: "nc-icon nc-touch-id",
    component: Register,
    layout: "/admin",
  },
  {
    path: "/icons",
    name: "Icons",
    icon: "nc-icon nc-diamond",
    component: Icons,
    layout: "/admin",
  },
];
export default routes;
