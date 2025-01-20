import React, { useState } from "react";
import LoginPage from "../pages/LoginPage";  // LoginPage 임포트
import RegisterPage from "../pages/RegisterPage";  // RegisterPage 임포트

function Main() {
    const [page, setPage] = useState('');  // 'login' or 'register' 상태 관리

    // 로그인 버튼 클릭
    const handleLoginClick = () => {
        setPage('login');
    };

    // 회원가입 버튼 클릭
    const handleRegisterClick = () => {
        setPage('register');
    };

    return (
        <div className="main-page">
            <h1>Welcome to RutinAI</h1>
            <p>여기에서 로그인 또는 회원가입을 선택하세요.</p>

            {/* 로그인 버튼 클릭 시 */}
            <button onClick={handleLoginClick}>로그인</button>

            {/* 회원가입 버튼 클릭 시 */}
            <button onClick={handleRegisterClick}>회원가입</button>

            {/* 조건부 렌더링 */}
            {page === 'login' && <LoginPage />}
            {page === 'register' && <RegisterPage />}
        </div>
    );
}

export default Main;
