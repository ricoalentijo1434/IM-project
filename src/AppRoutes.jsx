import { Routes, Route } from "react-router-dom";
import Login from "./Pages/Login";
import UserRegistration from "./Pages/UserRegistration";
import AdminRegistration from "./Pages/AdminRegistration";
import ForgotPassword from "./Pages/ForgotPassword";
import NotFound from "./Pages/NotFound";
function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/UserRegistration" element={<UserRegistration />} />
      <Route path="/AdminRegistration" element={<AdminRegistration />} />
      <Route path="/ForgotPassword" element={<ForgotPassword />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default AppRoutes;
