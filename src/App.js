/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable no-empty */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import { Container } from "@material-ui/core";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core";
import theme from "./components/Theme";
import OrderScreen from "./components/OrderScreen";
import UserListScreen from "./components/UserListScreen";
import UserEditScreen from "./components/UserEditScreen";
import ProductListScreen from "./components/ProductListScreen";
import ProductEditScreen from "./components/ProductEditScreen";
import ProductCreateScreen from "./components/ProductCreateScreen";
import OrderListScreen from "./components/OrderListScreen";
import ProductSettingsScreen from "./components/ProductSettingsScreen";
import CategoryCreate from "./components/CategoryCreate";
import BulkItemCreate from "./components/BulkItemCreate";

import SubCategoryCreate from "./components/SubCategoryCreate";
import CategoryListScreen from "./components/CategoryListScreen";
import SubCategoryListScreen from "./components/SubCategoryListScreen";
import CategoryEditScreen from "./components/CategoryEditScreen";
import ProductCreate from "./components/ProductCreate";
import BulkListScreen from "./components/BulkListScreen";
import DomesticListScreen from "./components/DomesticListScreen";
import DomesticItemCreate from "./components/DomesticItemCreate";

function App() {
  return (
    <ThemeProvider theme={theme} >
      <Router>
        
        <main className="py-0">
          <Container>
            {/* <Route path="/" component={CartLayoutScreen} /> */}
            <Route path="/admin/users" component={UserListScreen} exact />
            <Route
              path="/admin/category"
              component={CategoryListScreen}
              exact
            />
            <Route
              path="/admin/category/new"
              component={CategoryCreate}
              exact
            />
            <Route
              path="/admin/subcategory"
              component={SubCategoryListScreen}
              exact
            />
             <Route
              path="/admin/subcategory/new"
              component={SubCategoryCreate}
              exact
            />
            {/* <Route
              path="/admin/subcategory/new"
              component={SubCategoryCreateScreen}
              exact
            /> */}
            <Route path="/admin/user/:id/edit" component={UserEditScreen} />
            <Route path="/admin/products" component={ProductListScreen} exact />
            <Route
              path="/admin/products/:pageNumber"
              component={ProductListScreen}
              exact
            />
            <Route
              path="/admin/product/:id/edit"
              component={ProductEditScreen}
              exact
            />
            <Route
              path="/admin/product/new"
              component={ProductCreate}
              exact
            />
            
            <Route
              path="/admin/bulk/new/:id"
              component={BulkItemCreate}
              exact
            />
            <Route
              path="/admin/domestic/new/:id"
              component={DomesticItemCreate}
              exact
            />

            <Route path="/admin/orders" component={OrderListScreen} exact />
            <Route
              path="/admin/category/edit/:id"
              component={CategoryEditScreen}
              exact
            />

            <Route
              path="/admin/product-settings/:productId"
              component={ProductSettingsScreen}
              exact
            />
            <Route
              path="/admin/product-domestic/:id"
              component={DomesticListScreen}
              exact
            />
            <Route
              path="/admin/product-bulk/:id"
              component={BulkListScreen}
              exact
            />
            {/* <Route path="/admin/products" component={ProductListScreen} exact /> */}
            
          </Container>
        </main>
      </Router>
    </ThemeProvider>
  );
}

export default App;
