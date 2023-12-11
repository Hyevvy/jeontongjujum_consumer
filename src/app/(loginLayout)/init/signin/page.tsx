"use client";
import { ChangeEventHandler, useState } from "react";
import style from "@/app/(loginLayout)/init/signin/signin.module.css";
import authAPI from "@/apis/authentication/authenticationAPIService";
import Link from "next/link";
import Script from "next/script";
import Image from "next/image";

export default function SignIn() {
  const [email, setEmail] = useState<string>(null);
  const [password, setPassword] = useState<string>(null);
  const [message, setMessage] = useState<string>(null);
  const onSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const data = await authAPI.signIn({ email, password });
      if (data.code === 200) {
        console.log("로그인 성공");
      } else {
        setMessage("아이디와 비밀번호가 일치하지 않습니다.");
      }
    } catch (error) {
      console.error("로그인 실패");
      setMessage("아이디와 비밀번호가 일치하지 않습니다.");
    }
  };
  const onClickClose = () => {};

  const onChangeEmail: ChangeEventHandler<HTMLInputElement> = (e) => {
    setEmail(e.target.value);
  };

  const onChangePassword: ChangeEventHandler<HTMLInputElement> = (e) => {
    setPassword(e.target.value);
  };

  const handleKakaoLogin = (e) => {
    if (window.Kakao) {
      window.Kakao.init(process.env.NEXT_PUBLIC_KAKAO_JS_KEY);
      console.log(window.Kakao.isInitialized());
      window.Kakao.Auth.authorize({
        redirectUri:
          "https://jeontongju-dev.shop/authentication-service/api/sign-in/oauth2/code/kakao",
      });
    }
  };

  return (
    <>
      <Script src="https://developers.kakao.com/sdk/js/kakao.js"></Script>
      <div>
        <form onSubmit={onSubmit}>
          <div className={style.modalBody}>
            <div className={style.inputDiv}>
              <label className={style.inputLabel} htmlFor="email">
                아이디
              </label>
              <input
                id="email"
                className={style.input}
                value={email}
                onChange={onChangeEmail}
                type="text"
                placeholder=""
              />
            </div>
            <div className={style.inputDiv}>
              <label className={style.inputLabel} htmlFor="password">
                비밀번호
              </label>
              <input
                id="password"
                className={style.input}
                value={password}
                onChange={onChangePassword}
                type="password"
                placeholder=""
              />
            </div>
          </div>
          <div className={style.message}>{message}</div>
          <div className={style.modalFooter}>
            <button
              className={style.actionButton}
              disabled={!email && !password}
            >
              로그인하기
            </button>
            <Image
              alt="kakao"
              width={800}
              height={100}
              src="/kakao_login_medium_wide.png"
              preview={false}
              style={{ cursor: "pointer" }}
              onClick={handleKakaoLogin}
            />
          </div>
          <Link href="/init/findMyPassword">비밀번호 찾기</Link> |
          <Link href="/init/signup"> 계정 만들기</Link>
        </form>
      </div>
    </>
  );
}