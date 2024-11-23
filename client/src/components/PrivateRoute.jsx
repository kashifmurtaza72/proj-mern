import { useSelector } from "react-redux";
import { Outlet, Navigate } from "react-router-dom";
export default function PrivateRoute() {
  const { currentUser } = useSelector((state) => state.user);
  return currentUser ? <Outlet /> : <Navigate to="/signin" />;
  //Outlet: If the parent route matched exactly, it will render a child index route or nothing if there is no index route
}
