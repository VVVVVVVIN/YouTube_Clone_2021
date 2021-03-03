import express from "express";
import { 
    users, 
    editProfile, 
    changePassword, 
    usersDetail 
} from "../controllers/userController";
import routes from "../routes";

const userRouter = express.Router();

userRouter.get(routes.users,users);
userRouter.get(routes.userDetail, usersDetail);
userRouter.get(routes.editProfile, editProfile);
userRouter.get(routes.changePassword, changePassword);

export default userRouter;


