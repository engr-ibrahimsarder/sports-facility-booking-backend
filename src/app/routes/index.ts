import express from "express";
import { userRoutes } from "../modules/user/user.route";
import { facilityRoutes } from "../modules/facility/facility.route";

const router = express.Router();

const modulesRoute = [
  {
    path: "/auth",
    route: userRoutes,
  },
  {
    path: "/facility",
    route: facilityRoutes,
  },
];
modulesRoute.forEach((route) => router.use(route.path, route.route));

export default router;
