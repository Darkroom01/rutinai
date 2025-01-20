import React from "react";
import Register_logo from "../components/Register_logo";
import logo from "../image/LOGO.png";  // 로고 이미지 파일을 import
import axios from 'axios';



function RegisterPage() {
    return (
        <div className="Register-page">

            {/* 로고 이미지 추가 */}
            <img src={logo} alt="Logo" className="logo-image" />  {/* 로고 이미지 표시 */}


            <Register_logo />
        </div>
    );
}

export default RegisterPage;
