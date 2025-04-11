import React, { Suspense, useMemo, useRef } from "react";
import { Route, Switch, withRouter, Redirect } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import routes from "routers";
import ScrollToTop from "components/shared/ScrollToTop";

function DefaultLayout() {
  const jsx_render = useMemo(() => {
    return (
      <Suspense fallback={null}>
        <ScrollToTop>
          <Switch>
            {routes.map((route) => {
              return (
                route.component && (
                  <Route
                    key={new Date().getTime()}
                    path={route.path}
                    exact={route.exact}
                    name={route.name}
                    component={route.component}
                  />
                )
              );
            })}
            <Redirect from="/" to="/404" />
          </Switch>
        </ScrollToTop>
      </Suspense>
    );
  }, [routes]);

  return (
    <div className={"master-wrapper-page"}>
      <Header />
      <div className="master-wrapper-content">{jsx_render}</div>
      <Footer />
    </div>
  );
}

export default withRouter(DefaultLayout);
