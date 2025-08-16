import { Router } from "express";
import { UserController } from "./user.controller";

const router = Router();

router.post('/create-user', UserController.createUser);
router.get('/user/userId', UserController.getCurrentUserById);
router.post('/user/email', UserController.getCurrentUserByEmail);

export const UserRoutes= router;

