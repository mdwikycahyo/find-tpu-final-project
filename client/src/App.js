// import logo from './logo.svg';
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import CemetaryKeeper from "./pages/CemetaryKeeper";
import CemetaryBlocks from "./pages/CemetaryBlocks";
import Dashboard from "./pages/Dashboard";
import Register from "./pages/Register";
import Login from "./pages/Login";
import AddFormKeeper from "./pages/AddFormKeeper";
import EditFormKeeper from "./pages/EditFormKeeper";
import EditFormCemetary from "./pages/EditFormCemetary";
import EditTransactionStatus from "./pages/EditTransactionStatus";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/dashboard/editTransaction/:id">
          <Header />
          <Sidebar />
          <EditTransactionStatus />
        </Route>
        <Route path="/cemetaryBlocks/edit/:id">
          <Header />
          <Sidebar />
          <EditFormCemetary />
        </Route>
        <Route path="/cemetaryKeeper/edit/:id">
          <Header />
          <Sidebar />
          <EditFormKeeper />
        </Route>
        <Route path="/cemetaryKeeper/add">
          <Header />
          <Sidebar />
          <AddFormKeeper />
        </Route>
        <Route path="/cemetaryBlocks">
          <Header />
          <Sidebar />
          <CemetaryBlocks />
        </Route>
        <Route path="/cemetaryKeeper">
          <Header />
          <Sidebar />
          <CemetaryKeeper />
        </Route>
        <Route path="/dashboard">
          <Header />
          <Sidebar />
          <Dashboard />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
