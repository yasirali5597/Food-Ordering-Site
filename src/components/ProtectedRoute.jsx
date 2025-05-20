// import React from "react";
// import { useSelector } from "react-redux";
// import { Navigate } from "react-router-dom";
// const ProtectedRoute=({element})=>{
//     const cartItems=useSelector((state)=> state.cart.cart)
//     return cartItems.length > 0  ? element: <Navigate to="/"/>;
// }
// export default ProtectedRoute;



import React from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

/**
 * A higher-order component that restricts access to routes based on cart items or any condition.
 * @param {React.ReactNode} element - The component to render if the condition passes.
 * @param {boolean} requireCart - Whether cart items are required to access this route.
 * @param {string} redirectTo - The route to redirect to if condition fails.
 */
const ProtectedRoute = ({ element, requireCart = true, redirectTo = "/" }) => {
  const cartItems = useSelector((state) => state.cart.cart);
  const location = useLocation();

  const hasAccess = requireCart ? cartItems.length > 0 : true;

  return hasAccess ? (
    element
  ) : (
    <Navigate to={redirectTo} replace state={{ from: location }} />
  );
};

export default ProtectedRoute;
