import React from "react";
import "./style.css";
import logo from "../../img/logo.png";
import {AiOutlineUser, AiOutlineLock } from "react-icons/ai";


export default function Login (){
    return (
        <div>
            <div id="conteiner">
                <figure>
                    <img src={logo} alt="Forest Logo" />
                </figure>

                <form>
                    <div className="box-input">
                        <AiOutlineUser size={20} color="#224C3B"/>
                        <input type="text" placeholder="Username"/>
                    </div>
                    <div className="box-input">
                        <AiOutlineLock size={20} color="#224C3B"/>
                        <input type="password" placeholder="Password"/>
                    </div>
                    <div>
                        <input id="button" type="submit" value="SIGN IN"/>

                        <p>Don’t have an account? <span>Sing up</span></p>
                    </div>
                </form>
            </div>
        </div>
    )
}