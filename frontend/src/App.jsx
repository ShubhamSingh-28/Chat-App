import { BrowserRouter, Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react"; // Import Suspense for lazy loading
import ProtectRoute from "./components/auth/ProtectRoute";
import { LayoutLoader } from "./components/Applayout/Loader";

const Home = lazy(() => import("./pages/Home"));
const Login = lazy(() => import("./pages/Login"));
const Chat = lazy(() => import("./pages/Chat"));
const Groups = lazy(() => import('./pages/Groups'));
const NotFound = lazy(() => import('./pages/NotFound'));


const AdminLogin =lazy(()=> import("./pages/Admin/AdminLogin"));
const Dashboard =lazy(()=> import("./pages/Admin/Dashboard"));
const UserManagement =lazy(()=> import("./pages/Admin/UserManagement"));
const ChatManagement =lazy(()=> import("./pages/Admin/ChatManagement"));
const MessageManagement =lazy(()=> import("./pages/Admin/Messagemanagement"));


let user = true;

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<LayoutLoader/>}> 
        <Routes>
          <Route
            element={<ProtectRoute user={user} />} 
          >
            <Route path="/" element={<Home />} /> {/* Home route */}
            <Route path="/chat/:chatId" element={<Chat />} /> {/* Chat route */}
            <Route path="/groups" element={<Groups />} /> {/* Groups route */}
          </Route>

          <Route
            path="/login"
            element={<ProtectRoute user={!user} redirect="/"> {/* ProtectRoute for login route */}
              <Login />
            </ProtectRoute>}
          />

          <Route path="/admin" element={<AdminLogin/>}/>
          <Route path="/admin/dashboard" element={<Dashboard/>}/>
          <Route path="/admin/users" element={<UserManagement/>}/>
          <Route path="/admin/chats" element={<ChatManagement/>}/>
          <Route path="/admin/messages" element={<MessageManagement/>}/>

          <Route path="*" element={<NotFound />} /> {/* Catch-all route for 404 */}
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
