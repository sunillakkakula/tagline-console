import Charts from "views/Charts/Charts.js";
import Dashboard from "views/Dashboard/Dashboard.js";
import ExtendedForms from "views/Forms/ExtendedForms.js";
import ExtendedTables from "views/Tables/ExtendedTables.js";
import ReactTables from "views/Tables/ReactTables.js";
import ValidationForms from "views/Forms/ValidationForms.js";
import Apps from "@material-ui/icons/Apps";
import DashboardIcon from "@material-ui/icons/Dashboard";
import Timeline from "@material-ui/icons/Timeline";

var dashRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: DashboardIcon,
    component: Dashboard,
    layout: "/admin",
  },
  {
    collapse: true,
    name: "Configure",
    icon: Apps,
    state: "formsCollapse",
    views: [
      {
        path: "/categories",
        name: "Categories",
        mini: "CT",
        component: ExtendedForms,
        layout: "/admin",
      },
      {
        path: "/subcategories",
        name: "Sub Categories",
        mini: "SC",
        component: ExtendedForms,
        layout: "/admin",
      },
      {
        path: "/products",
        name: "Products",
        mini: "PD",
        component: ExtendedForms,
        layout: "/admin",
      },
      {
        path: "/bulk",
        name: "Available In Bullk",
        mini: "BK",
        component: ExtendedForms,
        layout: "/admin",
      },
      {
        path: "/domestic",
        name: "Available In Domestic",
        mini: "DM",
        component: ExtendedForms,
        layout: "/admin",
      },
      {
        path: "/validation-forms",
        name: "Validation Forms",
        mini: "VF",
        component: ValidationForms,
        layout: "/admin",
      },
    ],
  },
  {
    collapse: true,
    name: "Tables",
    icon: Apps,
    state: "tablesCollapse",
    views: [
      {
        path: "/extended-tables",
        name: "Extended Tables",
        mini: "ET",
        component: ExtendedTables,
        layout: "/admin",
      },
      {
        path: "/react-tables",
        name: "React Tables",
        mini: "RT",
        component: ReactTables,
        layout: "/admin",
      },
    ],
  },
  {
    path: "/charts",
    name: "Charts",
    icon: Timeline,
    component: Charts,
    layout: "/admin",
  },
];
export default dashRoutes;
