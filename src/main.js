import App from 'fusion-react';
import React from 'react';
import Router, { Switch, Route} from 'fusion-plugin-react-router';

export default async function start() {
  const root = <div>
    <Switch>
      <Route exact path="/">/
       <Route exact path="/h">
          h
          <Route exact path="/h/i">
            i
          </Route>
       </Route>
      </Route>
    </Switch>
  </div>
  const app = new App(root);
  app.register(Router);
  return app;
}