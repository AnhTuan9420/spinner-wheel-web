import DefaultLayout from "layouts/DefaultLayout";
import Page500 from "pages/PageError/Page500";
import React, { useEffect } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { BASENAME } from "utils/contants";
import { loadReCaptcha } from 'react-recaptcha-google';

function App() {
  useEffect(() => {
    loadReCaptcha();
  }, []);

  return (
    <BrowserRouter basename={BASENAME}>
      <React.Suspense fallback={null}>
        <Switch>
          {/* Redirect from root path to the desired basename */}
          <Route exact path="/" render={() => <Redirect to={`${BASENAME}`} />} />
          <Route exact path="/500" component={Page500} />
          {/* Render the DefaultLayout for any path */}
          <Route path="/" render={() => <DefaultLayout />} />
        </Switch>
      </React.Suspense>
    </BrowserRouter>
  );
}

export default App;
