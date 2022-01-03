import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../../img/logo.png";
import "./boxStyle.css";

export default function NotFoundPage() {
  let navigate = useNavigate();

  const newPage = (route) => navigate(route);

  return (
    <div id="box-page">
      <figure>
        <img src={logo} alt="Forest Logo" title="Protect the forest!" />
      </figure>
      <h1>Page Not Found</h1>

      <button id="button-back"
      onClick={() => newPage("/")}>Back to Homepage</button>
    </div>
  );
}
