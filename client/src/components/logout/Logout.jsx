import { Navigate } from "react-router-dom";
import { useLogout } from "../../hooks/use-auth";

export default function Logout() {
  const logout = useLogout();

  logout();

  return <Navigate to="/" />;
}
