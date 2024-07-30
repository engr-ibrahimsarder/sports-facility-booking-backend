import express from "express";
import { userRoutes } from "../modules/user/user.route";

const router = express.Router();

const modulesRoute = [
  {
    path: "/auth",
    route: userRoutes,
  },
];
modulesRoute.forEach((route) => router.use(route.path, route.route));

export default router;
