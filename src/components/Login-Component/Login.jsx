import React, { useState } from "react";
import "./style.css";
import logo from "../../img/logo.png";
import {AiOutlineUser, AiOutlineLock, AiOutlineEye, AiOutlineEyeInvisible} from "react-icons/ai";


export default function Login (){
    const [buttonText, setButtonText] = useState("SIGN IN");
    const [spanText, setSpanText] = useState("Singn Up");

    const [signUp, setSignUp] = useState(false);

    const [eyeVisible, setEyeVisible] = useState(true);


    function handleInput (){
        if(signUp === false){
            setSignUp(true);
            setButtonText("SIGN UP");
            setSpanText("Sign In");
        }else{
            setButtonText("SIGN IN");
            setSpanText("Sign Up");
            setSignUp(false);
        }
    }

    function switchEye (){
        if (eyeVisible){
            setEyeVisible(false);
        }else{
            setEyeVisible(true);
        }
    }

    function onSubmit (e){
        e.preventDefault();
    }

    return (
        <div>
            <div id="conteiner">
                <figure>
                    <img src={logo} alt="Forest Logo" title="Protect the forest!"/>
                </figure>

                <form onSubmit={onSubmit}>
                    <div className="box-input">
                        <AiOutlineUser size={20} color="#224C3B"/>
                        <input type="text" placeholder="Username"/>
                    </div>

                    <div className="box-input">
                        <AiOutlineLock size={20} color="#224C3B"/>
                        <input type={eyeVisible?"password":"text"} placeholder="Password"/>
                        {eyeVisible
                        ?
                        <AiOutlineEye onClick={()=> switchEye()} size={20} color="#224C3B"/>
                        :
                        <AiOutlineEyeInvisible onClick={()=> switchEye()} size={20} color="#224C3B"/>}
                    </div>
                    
                    {signUp?
                    <div className="box-input">
                        <AiOutlineLock size={20} color="#224C3B"/>
                        <input type={eyeVisible?"password":"text"} placeholder="Confirm password"/>
                        {eyeVisible
                        ?
                        <AiOutlineEye onClick={()=> switchEye()} size={20} color="#224C3B"/>
                        :
                        <AiOutlineEyeInvisible onClick={()=> switchEye()} size={20} color="#224C3B"/>}
                        
                    </div>
                    :
                    ""
                    }

                    <div>
                        <input id="button" type="submit" value={buttonText}/>

                        <p>Don’t have an account? <span onClick={() => handleInput()}>{spanText}</span></p>
                    </div>
                </form>
            </div>
        </div>
    )
}