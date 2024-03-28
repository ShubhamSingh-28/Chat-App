import express from "express";
import { isAuthenticated } from "../middlewares/auth.js";
import { addMembers, getMyChats, getMyGroups, leaveGroup, newGroup, removemember } from "../controllers/chat.js";

const app = express.Router();

// After  logging in the user will be redirected to his profile page where he can see all of his data and also update it if neededexport default app; 
app.use(isAuthenticated) ;

app.post('/new', newGroup);
app.get('/my', getMyChats);
app.get('/my/groups', getMyGroups);
app.put('/addmembers', addMembers);

app.put('/removemember', removemember);

app.delete('/leave/:id', leaveGroup);


  export default app;