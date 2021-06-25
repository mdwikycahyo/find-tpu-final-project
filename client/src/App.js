// import logo from './logo.svg';
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import CemetaryKeeper from "./components/CemetaryKeeper";
import CemetaryBlocks from "./components/CemetaryBlocks";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import AddForm from "./pages/AddForm";

function App() {
  return (
    <Router>
      <Header />
      <Sidebar />
      <Switch>
        <Route path="/cemetaryBlocks">
          <CemetaryBlocks />
        </Route>
        <Route path="/cemetaryKeeper">
          <CemetaryKeeper />
        </Route>
        <Route path="/add">
          <AddForm />
        </Route>
        <Route path="/dashboard">
          <Dashboard />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
