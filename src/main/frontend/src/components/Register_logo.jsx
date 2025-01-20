import React, { useState } from 'react';
import './Register_logo.css';
import axios from 'axios';

axios.defaults.withCredentials = true; // 쿠키 포함 허용

const Register_logo = () => {
    const [formData, setFormData] = useState({
        username: '',
        password: '',
        name: ''
    });

    const [message, setMessage] = useState("");

    // 입력값 변경 핸들러
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    // 회원가입 API 호출
    const handleSignup = async (e) => {
        e.preventDefault(); // 기본 폼 제출 동작 방지
        try {
            const response = await axios.post("http://localhost:8080/api/user/signup", formData);
            setMessage("회원가입 성공! 🎉");
        } catch (error) {
            console.error("회원가입 실패:", error.response?.data || error.message);
            setMessage("회원가입에 실패했습니다. 다시 시도해주세요.");
        }
    };

    return (
        <div className="register-logo-container">
            <div className="register-logo-form">
                <h2>회원가입</h2>
                <form onSubmit={handleSignup}>
                    <input
                        type="text"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                        placeholder="아이디"
                        required
                    />
                    <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        placeholder="비밀번호"
                        required
                    />
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="이름"
                        required
                    />
                    <button type="submit">가입하기</button>
                </form>
                {message && <p className="message">{message}</p>}
            </div>
        </div>
    );
};

export default Register_logo;
