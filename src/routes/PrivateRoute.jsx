/* eslint-disable react/prop-types */
import { Navigate } from "react-router-dom";

export default function PrivateRoute(props) {
  const isLoggedin = false;
  return (
    <>
      {isLoggedin ? (
        <>{props.children}</>
      ) : (
        <>
          <Navigate to={"/login"}></Navigate>
        </>
      )}
    </>
  );
}
