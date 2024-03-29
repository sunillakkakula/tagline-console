/*!

=========================================================
* Material Dashboard PRO React - v1.10.0
=========================================================

* Product Page: https://www.novellogiks.com/product/material-dashboard-pro-react
* Copyright 2021 Lakkakula Sunil (https://www.novellogiks.com)

* Coded by Lakkakula Sunil

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
/* eslint-disable react/prop-types */
/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import AdminLayout from "layouts/Admin.js";
import { ThemeProvider } from "@material-ui/core";
import theme from "./components/Theme";
import "assets/scss/material-dashboard-pro-react.scss?v=1.10.0";
// import "./bootstrap.min.css";
import App from "./App";
import { Provider } from "react-redux";
import store from "./store";


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
