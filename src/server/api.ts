import { Router } from "express";
import { userRouter } from "./users/user-router";

export const api = Router();

api.use("/users", userRouter);
