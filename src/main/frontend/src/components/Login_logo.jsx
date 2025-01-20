import React, { useState } from "react";
import "./Login_logo.css";
import axios from "axios";
import Cookies from "js-cookie";
axios.defaults.withCredentials = true; // 쿠키 포함 허용

function Login_logo() {
    const [loginData, setLoginData] = useState({
        username: "",
        password: "",
    });

    const [message, setMessage] = useState("");

    const handleChange = (e) => {
        setLoginData({
            ...loginData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            // 로그인 API 호출
            const response = await axios.post("http://localhost:8080/api/user/login", loginData);

            // JWT 토큰을 쿠키에 저장
            Cookies.set("jwt", response.data, {
                expires: 1, // 1일 유효
                secure: true, // HTTPS에서만 사용
                sameSite: "Strict", // CSRF 방지
            });

            setMessage("로그인 성공!"); // 성공 메시지
        } catch (error) {
            console.error("로그인 실패:", error.response?.data || error.message);
            setMessage("로그인에 실패했습니다.");
        }
    };

    return (
        <div className="login-form-container">
            <h1>로그인</h1>
            <form onSubmit={handleSubmit} className="login-form">
                <input
                    type="text"
                    name="username"
                    value={loginData.username}
                    onChange={handleChange}
                    placeholder="아이디"
                    required
                />
                <input
                    type="password"
                    name="password"
                    value={loginData.password}
                    onChange={handleChange}
                    placeholder="비밀번호"
                    required
                />
                <button type="submit">로그인</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
}

export default Login_logo;
