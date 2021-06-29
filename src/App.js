import { HashRouter as Router } from "react-router-dom";
import { Fragment } from "react";
import { Header, MainSwitch } from "components";

function App() {
  return (
    <Router>
      <Header />
      <Fragment>
        <MainSwitch />
      </Fragment>
    </Router>
  );
}

export default App;
