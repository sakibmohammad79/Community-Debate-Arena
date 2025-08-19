// modules/user/user.route.ts
import { Router } from "express";
import { UserController } from "./user.controller";

import { 
  createUserSchema, 
} from "./user.validate";
import { validateRequest } from "../../middlewares/validation";

const router = Router();

// All routes using catchAsync + sendResponse pattern
router.post('/create-user', 
  UserController.createUser          
);

router.get('/user/:userId', 
  UserController.getCurrentUserById 
);

router.post('/user/email', 
  UserController.getCurrentUserByEmail  
);

export const UserRoutes = router;