import React from "react" ;


const login = () => {
    const sign_in_btn = document.querySelector("#sign-in-btn");
    const sign_up_btn = document.querySelector("#sign-up-btn");
    const container = document.querySelector(".container");
    
    const signin = () => {
        sign_in_btn.addEventListener("click", () => {
            container.classList.remove("sign-up-mode");
          });
        }
    const signup = () => {
        sign_up_btn.addEventListener("click", () => {
            container.classList.add("sign-up-mode");
          });
    }
    return(
        <div className="login">
        
        {sign_up_btn.addEventListener("click", () => {container.classList.add("sign-up-mode"); })}
    
        {sign_in_btn.addEventListener("click", () => {container.classList.remove("sign-up-mode");})}
          
        </div>
    );
}

export default login;