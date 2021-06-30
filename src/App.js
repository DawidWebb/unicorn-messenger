import { HashRouter as Router } from "react-router-dom";
import { Fragment } from "react";
import { Header, MainSwitch, Spinner, TaskInformation } from "components";

function App() {
  return (
    <Router>
      <Header />
      <Fragment>
        <MainSwitch />
      </Fragment>
      <Spinner />
      <TaskInformation />
    </Router>
  );
}

export default App;
