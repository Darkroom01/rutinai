import React, { useState } from "react";
import LoginPage from "../pages/LoginPage";  // LoginPage 임포트
import RegisterPage from "../pages/RegisterPage";  // RegisterPage 임포트
import logo from '../image/LOGO.png';  // 로고 이미지 임포트

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
            {/* 로그인, 회원가입 버튼 (오른쪽 상단에 배치) */}
            <div className="button-container">
                <button onClick={handleLoginClick}>로그인</button>
                <button onClick={handleRegisterClick}>회원가입</button>
            </div>

            {/* 로고 이미지 표시 */}
            <img src={logo} alt="Logo" className="logo-image" />

            {/* 설명 텍스트 */}
            <p className="description-text">사용자가 매일 반복하는 작업과 해야 할 일들을 AI 기술로 최적화하여,
                보다 생산적이고 체계적인 일정을 관리할 수 있도록 지원하는 도구.</p>

            {/* 조건부 렌더링 */}
            {page === 'login' && <LoginPage />}
            {page === 'register' && <RegisterPage />}

            {/* 4개의 그림을 나란히 배치 */}
            <div className="image-container">
                <img src="/path/to/image1.jpg" alt="Image 1" />
                <img src="/path/to/image2.jpg" alt="Image 2" />
                <img src="/path/to/image3.jpg" alt="Image 3" />
                <img src="/path/to/image4.jpg" alt="Image 4" />
            </div>

            {/* 왼쪽 정렬된 텍스트 */}
            <div className="text-left">
                <p>(주) 2025 해커톤 5조</p>
                <p>팀원: 허찬호(영남대학교) ⁩, 최진호(대구가톨릭대학교) , 박유란/조현아(순천향대학교).</p>
            </div>
        </div>
    );
}

export default Main;
