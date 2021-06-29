import { Route, Switch, Redirect } from "react-router-dom";
import { WelcomePage } from "pages";

const MainSwitch = () => {
  return (
    <>
      <Switch>
        <Route exact path="/" render={() => <WelcomePage />} />
        <Redirect to="/" />
      </Switch>
    </>
  );
};
export default MainSwitch;
