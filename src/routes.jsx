import React from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";

import { ShipSynopList } from './components/shipsynop/shipsynop.list'
import { ShipSynopItem } from './components/shipsynop/shipsynop.item'
import { ShipSynopMaps } from './components/shipsynop/shipsynop.maps'
import { ShipSynopUpload } from './components/shipsynop/shipsynop.upload'

import { AuthItem } from "./components/auth/auth.item";
import { Profile } from "./components/auth/profile.item";
import { TokenRoutes } from './routes.token'

const Routes = () => (
    <BrowserRouter>
       <Switch>
           <Route exact path={["/", "/dashboard"]} component={ShipSynopList} />
           <Route exact path="/signin" component={AuthItem} />

           <TokenRoutes exact path="/land" component={ShipSynopMaps} />
           <TokenRoutes exact path="/upload" component={ShipSynopUpload} />
           <TokenRoutes exact path="/profile" component={Profile} />
           <TokenRoutes exact path={"/signup"} component={AuthItem} />
           <TokenRoutes exact path={["/item", "/item/:id"]} component={ShipSynopItem} />
        </Switch>
    </BrowserRouter>
)

export default Routes;