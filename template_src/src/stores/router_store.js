import { writable } from "svelte/store";
import { SinglePageRouter } from "../scripts/singlepage_router";

const appRoutes = [
    {routeID: 0, routeName: "home"},
    {routeID: 1, routeName: "register"},
    {routeID: 2, routeName: "profile"},
];

export const spaRouter = writable(new SinglePageRouter(appRoutes, appRoutes[0]));