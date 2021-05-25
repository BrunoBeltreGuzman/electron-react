import React from "react";
import {
       BrowserRouter as Router,
       Route,
       Switch,
       useParams,
} from "react-router-dom";

import Index from "../pages/Index";
import Page from "../pages/Page";

import NotFound from "../pages/NotFound";

export default function router() {
       return (
              <div>
                     <Router>
                            <Switch>
                                   {/* index */}
                                   <Route exact path="/">
                                          <Index></Index>
                                   </Route>

                                   {/* Page */}
                                   <Route exact path="/page">
                                          <Page></Page>
                                   </Route>

                                   {/* Default */}
                                   <Route component={Index} />
                            </Switch>
                     </Router>
              </div>
       );
}
//<Route component={NotFound} />

/*

                        <Route
                                          exact
                                          path="/profile/:profile"
                                          component={Profile}
                                   />

*/
