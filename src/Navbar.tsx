import { Link, NavLink, Outlet, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "./hooks/redux";
import { setLogout, setUser } from "./redux/slices/auth";
import { useEffect, useState } from "react";

import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import { Box, ListItemText } from "@mui/material";
import SimpleListMenu from "./components/navbarCarrito";

export const Layout = () => {
  const { auth } = useAppSelector((state) => state);
  const [loading, setloading] = useState<boolean>(true);
  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const desloguear = () => {
    dispatch(setLogout());
    navigate("/login");
  };

  useEffect(() => {
    setTimeout(() => {
      setloading(true);
      dispatch(
        setUser({
          token: "TokenModificadoEnGuar",
          user: auth.user,
        })
      );
      setloading(false);
    }, 1000);
  }, []);

  return (
    <>
      {loading ? (
        <div className="d-flex justify-content-center text-center vh-100 bg-secondary">
          <div className="spinner-border" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      ) : (
        <>
          <nav className="navbar navbar-expand-sm navbar-dark bg-dark border-bottom ">
            <Link className="navbar-brand" to="/">
              Inicio
            </Link>
            <div className="navbar-collapse">
              <div className="navbar-nav">
                <NavLink className="nav-item nav-link" to="/other">
                  Other
                </NavLink>
              </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
              <ul className="navbar-nav ml-auto">
                {/* Carrito */}
                <SimpleListMenu/>
                {/*  */}
                <span className="nav-item nav-link">Hola {auth.user}!!!</span>
                <span
                  className="nav-item nav-link text-danger"
                  onClick={desloguear}
                >
                  Logout
                </span>
              </ul>
            </div>
          </nav>
          <div className="vh-100 bg-dark text-white p-5">
            <Outlet />
          </div>
        </>
      )}
    </>
  );
};
