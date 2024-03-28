import express from "express";
import { getMyProfile, login, logout, newUser, searchUser } from "../controllers/user.js";
import {singleAvatar} from '../middlewares/multer.js'
import { isAuthenticated } from "../middlewares/auth.js";

const app = express.Router();


app.post("/new",singleAvatar ,newUser);  
app.post("/login", login);   


// After  logging in the user will be redirected to his profile page where he can see all of his data and also update it if neededexport default app; 
app.use(isAuthenticated) ;

app.get('/me', getMyProfile);
app.get("/logout", logout);
app.get("/search", searchUser);

  export default app;