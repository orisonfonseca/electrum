import logo from "./logo.svg";
import "./App.css";
import SignUp from "./Pages/SignUp/SignUp";
import { Layout } from "antd";
import Login from "./Pages/Login/Login";
import HeaderPlate from "./Pages/Header/Header";
import List from "./Pages/List/List";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import PublicRoute from "./routes/PublicRoute";
import PrivateRoute from "./routes/PrivateRoute";
import { Provider } from "react-redux";
import store from "./Redux/store";
import { loginSuccess } from "./Redux/Action/authAction";

const { Header, Footer, Sider, Content } = Layout;


const App = () => {

  const token = localStorage.getItem("token");
  if(token){
   store.dispatch(loginSuccess(JSON.parse(token)))
  }
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <Layout>
            <Header>
              <HeaderPlate />
            </Header>
            <Switch>
              <Content>
                <PublicRoute exact path="/" component={Login} />
                <PublicRoute exact path="/signUp" component={SignUp} />
                <PrivateRoute exact path="/list" component={List} />
              </Content>
            </Switch>
            <Footer>Footer</Footer>
          </Layout>
        </Router>
      </Provider>
    </div>
  );
};

export default App;
