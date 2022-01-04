import React, { useContext } from "react";
import "./ProfileStyle.css";
import logo from "../../../img/white-logo.png";
import StoreContext from "../../context/Context";


export default function Profile() {
  const { setToken } = useContext(StoreContext);

  return (
    <div id="background">
      <div id="content">
      <figure>
          <img src={logo} alt="Forest Logo" title="Protect the forest!" />
        </figure>

        <div id="userInitial">
          <span>A</span>
        </div>

        <div id="text-conteiner">
          <h1>WELCOME</h1>
          <span>ADMIN</span>
        </div>

        <button onClick={() => setToken(null)}>QUIT</button>

      </div>
    </div>
  );
}
