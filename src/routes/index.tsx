import React, { useEffect, useCallback } from "react";
import { Switch, Route, useHistory, useLocation } from "react-router";
import Albuns from "../pages/Albuns";
import Posts from "../pages/Posts";
import ToDo from "../pages/ToDo";

const Routes: React.FC = () => {
  const { pathname } = useLocation();
  const { push } = useHistory();
  const handleRedirect = useCallback(
    (pathLink: string) => {
      push(pathLink);
    },
    [push]
  );
  useEffect(() => {
    if (pathname === "/") {
      handleRedirect("/to-do");
    }
  }, []);
  return (
    <>
      <div>
        <Switch>
          <Route path="/to-do" component={ToDo} />
          <Route path="/albuns" component={Albuns} />
          <Route path="/posts" component={Posts} />
        </Switch>
      </div>
    </>
  );
};

export default Routes;
