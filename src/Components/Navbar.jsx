import React from "react";
import { authActions } from "../Store/Store";
import { useSelector, useDispatch } from "react-redux";
const Navbar = () => {
  const authState = useSelector((Store) => Store.auth.isLoggedIn);
  const dispatch = useDispatch();
  const loginHandler = (e) => {
    e.preventDefault();
    dispatch(authActions.login());
  };
  const logoutHandler = (e) => {
    e.preventDefault();
    dispatch(authActions.logout());
  };
  return (
    <nav className="flex w-full p-3 bg-purple-500 items-center">
      <h2 className="flex-1 text-yellow-500 text-2xl">Logo</h2>
      <ul className="flex-2 flex">
        <li className="px-3 py-1 text-white ">
          <a href="">Shop</a>
        </li>
        {/* <li className="px-3 py-1 text-slate-500 bg-white rounded-md mx-1 border-2">
          <a href="">SignUp</a>
        </li> */}
        {!authState && (
          <li className="px-3 py-1 text-white rounded-md mx-1 border-2 bg-slate-500">
            <a href="" onClick={loginHandler}>
              Login
            </a>
          </li>
        )}

        {authState && (
          <li className="px-3 py-1 text-white rounded-md mx-1 border-2 bg-slate-500">
            <a href="" onClick={logoutHandler}>
              Logout
            </a>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
