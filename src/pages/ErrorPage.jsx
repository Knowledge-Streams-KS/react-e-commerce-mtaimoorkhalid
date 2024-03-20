import { NavLink, useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <h1>Page not found</h1>
      <NavLink to="/">Go to Home page</NavLink>
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        Go to Home Page
      </button>
    </>
  );
};

export default ErrorPage;
