import { Route, Switch, Redirect } from "react-router-dom";
import { RootSection } from "pages";

const MainSwitch = () => {
  return (
    <>
      <Switch>
        <Route exact path="/" render={() => <RootSection />} />
        <Redirect to="/" />
      </Switch>
    </>
  );
};
export default MainSwitch;
