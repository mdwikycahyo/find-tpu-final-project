// import logo from './logo.svg';
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import CemetaryKeeper from "./pages/CemetaryKeeper";
import CemetaryBlocks from "./components/CemetaryBlocks";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import AddFormKeeper from "./pages/AddFormKeeper";
import EditFormKeeper from "./pages/EditFormKeeper";

function App() {
  return (
    <Router>
      <Switch>
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
      </Switch>
    </Router>
  );
}

export default App;
