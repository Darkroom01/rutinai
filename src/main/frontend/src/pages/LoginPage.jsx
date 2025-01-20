import React from "react";
import "../components/Login_logo.css";  // CSS 스타일 임포트
import logo from "../image/LOGO.png";  // 로고 이미지 경로 설정
import Login_logo from "../components/Login_logo";  // Login_logo 컴포넌트 임포트

function LoginPage() {
    return (
        <div className="login-page">
            <img src={logo} alt="Logo" className="logo-image" />  {/* 로고 이미지 */}
            <Login_logo />  {/* 로그인 폼 컴포넌트 */}
        </div>
    );
}

export default LoginPage;
