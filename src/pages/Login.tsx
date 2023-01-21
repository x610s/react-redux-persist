import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { loginAsync, setLogin } from "../redux/slices/auth";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const [form, setform] = useState<string>("");
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleToken = () => {
    if (form.length > 0) {
      loginAsync("eve.holt@reqres.in", "cityslicka", dispatch)
        .then((x) => {
          dispatch(setLogin({user:"eve.holt@reqres.in", token: 'nuevo_token'}))
          navigate("/");
        })
        .catch((x) => {
          console.log("no pasó");
        });
    }
  };

  return (
    <>
      <div className="vh-100 bg-dark g-0 p-5">
        <h2 className="text-white">Ingresar</h2>
        <input
          type="text"
          name="name"
          className="mt-5 mb-1 form-control"
          onChange={(e) => {
            setform(e.currentTarget.value);
          }}
        />
        <button className="btn btn-primary btn-block" onClick={handleToken}>
          Loguear
        </button>
      </div>
    </>
  );
};
