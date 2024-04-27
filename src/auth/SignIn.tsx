import React from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase/firebase";
import useUserState from "../hooks/useUserState";

import { signInWithEmailAndPassword } from "firebase/auth";
import SignLayout from "../components/layout/SignLayout";
import Button from "../components/common/Button";
import Input from "../components/common/Input";

const SignIn = () => {
  const navigate = useNavigate();

  const { userEmail, password, setUserEmail, setPassword, setIsLogin } =
    useUserState();

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    switch (name) {
      case "userEmail":
        setUserEmail(value);
        break;
      case "password":
        setPassword(value);
        break;
      default:
        break;
    }
  };

  const onClickLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, userEmail, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        setIsLogin(true);
        alert("로그인에 성공했습니다.");
        setUserEmail("");
        setPassword("");
        navigate("/");
        console.log(user);
      })
      .catch((err) => {
        switch (err.code) {
          case "auth/invalid-email":
            alert("이메일을 바르게 입력해주세요.");
            break;
          case "auth/email-already-in-use":
            alert("등록된 이메일 입니다.");
            break;
          case "auth/missing-password":
            alert("비밀번호를 입력해주세요.");
            break;
          case "auth/invalid-credential":
            alert("등록된 정보가 없습니다. 정보를 다시 입력해주세요.");
            break;

          default:
            alert("로그인 실패");
            break;
        }
        setIsLogin(false);
        setUserEmail("");
        setPassword("");
      });
  };

  return (
    <SignLayout>
      <form
        onSubmit={onClickLogin}
        className="flex flex-col gap-8  w-[500px] min-h-[800px] p-4 my-0 mx-auto bg-[#EEE7DA] items-center"
      >
        <h1 className="text-[36px] font-bold bg-[#EEE7DA] text-center ">
          Sign In
        </h1>
        <Input
          type={"email"}
          name={"userEmail"}
          value={userEmail}
          placeholder={"이메일을 입력해 주세요."}
          onChange={handleChangeInput}
        />
        <Input
          type={"password"}
          name={"password"}
          value={password}
          placeholder={"비밀번호를 입력해 주세요"}
          onChange={handleChangeInput}
        />

        <div className="flex gap-8 bg-[#EEE7DA]">
          <input
            type="submit"
            value={"로그인"}
            className="cursor-pointer w-[100px] h-[60px] text-center bg-[#AFC8AD] hover:bg-[#88AB8E] text-white text-[24px] py-3 font-bold transition"
          />
          <Button
            type={"button"}
            title={"취소하기"}
            onClick={() => navigate(-1)}
            className={
              "cursor-pointer w-[100px] h-[60px] text-center bg-[#AFC8AD] hover:bg-[#88AB8E] text-white text-[24px] py-3 font-bold transition"
            }
          />
        </div>
        <div className="bg-[#EEE7DA] font-bold text-neutral-500 text-[18px]">
          아직 회원가입을 안하셨다면 |{" "}
          <span
            className="bg-[#EEE7DA] cursor-pointer hover:text-neutral-700 transition"
            onClick={() => navigate("/signup")}
          >
            회원가입
          </span>
        </div>
      </form>
    </SignLayout>
  );
};

export default SignIn;
