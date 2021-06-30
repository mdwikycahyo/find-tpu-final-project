// import logo from './logo.svg';
import "./App.css";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { GuardProvider, GuardedRoute } from "react-router-guards";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import CemetaryKeeper from "./pages/CemetaryKeeper";
import CemetaryBlocks from "./pages/CemetaryBlocks";
import Dashboard from "./pages/Dashboard";
// import Register from "./pages/Register";
import Login from "./pages/Login";
import AddFormCemetary from "./pages/AddFormCemetary";
import EditFormCemetary from "./pages/EditFormCemetary";
// import EditForm from "./pages/EditForm";
import EditTransactionStatus from "./pages/EditTransactionStatus";
import Loading from "./pages/Loading";
import Error from "./pages/Error";

const requireLogin = (to, from, next) => {
  if (to.meta.auth) {
    if (localStorage.getItem("access_token")) {
      next();
    }
    next.redirect("/login");
  } else {
    next();
  }
};

function App() {
  return (
    <Router>
      <Switch>
        <GuardProvider guards={[requireLogin]} loading={Loading} error={Error}>
          <GuardedRoute exact path="/login">
            <Login />
          </GuardedRoute>
          <GuardedRoute exact path="/dashboard" meta={{ auth: true }}>
            <Header />
            <Sidebar />
            <Dashboard />
          </GuardedRoute>
          <GuardedRoute exact path="/cemetaryKeepers" meta={{ auth: true }}>
            <Header />
            <Sidebar />
            <CemetaryKeeper />
          </GuardedRoute>
          <GuardedRoute exact path="/cemetaryBlocks" meta={{ auth: true }}>
            <Header />
            <Sidebar />
            <CemetaryBlocks />
          </GuardedRoute>
          <GuardedRoute exact path="/cemetaryBlocks/add">
            <Header />
            <Sidebar />
            <AddFormCemetary />
          </GuardedRoute>
          <GuardedRoute exact path="/cemetaryBlocks/edit/:id">
            <Header />
            <Sidebar />
            <EditFormCemetary />
          </GuardedRoute>
          <GuardedRoute
            exact
            path="/dashboard/editTransaction/:id"
            meta={{ auth: true }}
          >
            <Header />
            <Sidebar />
            <EditTransactionStatus />
          </GuardedRoute>
        </GuardProvider>
      </Switch>
    </Router>
  );
}

export default App;
