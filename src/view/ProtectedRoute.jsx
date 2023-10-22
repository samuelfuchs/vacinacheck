import { useState } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import Toolbar from "../components/Toolbar";
import SideBar from "../components/SideBar";

const ProtectedRoute = ({ children, pageTitle }) => {
  const { user } = useAuth();
  const [showSidebar, setShowSidebar] = useState(false);
  console.log("pageTitle", pageTitle);
  if (!user) {
    return <Navigate to="/" />;
  }
  const handleShow = () => setShowSidebar(true);

  return (
    <div>
      <Toolbar pageTitle={pageTitle} handleShow={handleShow} />
      <SideBar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
      {children}
    </div>
  );
};

export default ProtectedRoute;
