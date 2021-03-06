import React from "react"
import { Route, HashRouter , Switch } from "react-router-dom"

import { ShipSynopList } from "../components/shipsynop/shipsynop.list"
import { ShipSynopItem } from "../components/shipsynop/shipsynop.item.coreui"
import { ShipSynopMaps } from "../components/map/shipsynop.maps"
import { ShipSynopUpload } from "../components/upload/shipsynop.upload"
import { Lista } from "../components/shipsynop/shipsynop.list.coreui"

import { AuthItem } from "../components/auth/auth.item"
import { Profile } from "../containers/profile"
import { TokenRoutes } from "./routes.token"

export const Routes = () => (
    <HashRouter>
       <Switch>
           <Route exact path={["/observation", "/dashboard"]} component={Lista} />
           <Route exact path="/list" component={ShipSynopList} />
           <Route exact path="/signin" component={AuthItem} />
           <Route exact path="/signup" component={AuthItem} />

           <TokenRoutes exact path="/land" component={ShipSynopMaps} />
           <TokenRoutes exact path="/upload" component={ShipSynopUpload} />
           <TokenRoutes exact path="/profile" component={Profile} />
           {/* <TokenRoutes exact path={"/signup"} component={AuthItem} /> */}
           <TokenRoutes exact path={["/item", "/item/:id"]} component={ShipSynopItem} />
        </Switch>
    </HashRouter>
)