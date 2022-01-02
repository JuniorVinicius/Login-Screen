import React, { useState, useContext } from "react";
import "./style.css";
import logo from "../../img/logo.png";
import {AiOutlineUser, AiOutlineLock, AiOutlineEye, AiOutlineEyeInvisible} from "react-icons/ai";

import StoreContext from "../context/Context";

function initialState (){
    return {user: '', password: ''};
}

function userLogin (values){
    if (values.user === 'admin' && values.password){
       return { token:"1234" } 
    }
    return {error: "User or password not found!"}
}


export default function Login (){
    const [eyeVisible, setEyeVisible] = useState(true);
    const [values, setValues] = useState(initialState);
    const [error, setError] = useState(null);
    const { setToken } = useContext(StoreContext);


    function switchEye (){
        if (eyeVisible){
            setEyeVisible(false);
        }else{
            setEyeVisible(true);
        }
    }
    
    function onChange (event){
        const {value, name} = event.target;
        setValues({
            ...values,
            [name]: value,
        });
    }

    function onSubmit (e){
        e.preventDefault();

        const {token, error} = userLogin(values);

        if(token){
            setToken(token)
        }
        
        setValues(initialState)
        setError(error)
        
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

                        <input 
                        type="text" 
                        placeholder="Username" 
                        name="user"
                        autoComplete="off"  
                        onChange={onChange} 
                        value={values.user}/>
                    </div>

                    <div className="box-input">
                        <AiOutlineLock size={20} color="#224C3B"/>

                        <input 
                        type={eyeVisible?"password":"text"} 
                        placeholder="Password" 
                        name="password"
                        onChange={onChange} 
                        value={values.password}/>

                        {eyeVisible?
                        <AiOutlineEyeInvisible onClick={()=> switchEye()} size={20} color="#224C3B"/>
                        :
                        <AiOutlineEye onClick={()=> switchEye()} size={20} color="#224C3B"/>}
                    </div>

                    {error && (
                        <div>{error}</div>
                    )}

                    <div>
                        <input id="button" type="submit" value="SIGN IN"/>

                        <p>Don’t have an account? <span>Sign Up</span></p>
                    </div>
                </form>
            </div>
        </div>
    )
}