import { useContext } from "react";
import { UserAuthContext } from "../context/UserAuthContextProvider";
export default function Login() {
  const { setIsLoggedIn } = useContext(UserAuthContext);
  return (
    <>
      <h1>Login</h1>
      <button
        onClick={() => {
          setIsLoggedIn(true);
        }}
      >
        Login
      </button>
    </>
  );
}
