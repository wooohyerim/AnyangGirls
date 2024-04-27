import React, { useEffect } from "react";
import { auth } from "../firebase/firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import Button from "./common/Button";
import useUserState from "../hooks/useUserState";

const Header = () => {
  const navigate = useNavigate();
  const { setIsLogin } = useUserState();

  const user = auth.currentUser;

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setIsLogin(true);
      } else {
        setIsLogin(false);
      }
    });
  }, [user]); //로그인 후 새로고침 해도 사용자 때 정보 저장

  const goToSignUp = () => {
    if (!user) {
      navigate("/signup");
    }
  };

  const onClickLog = async () => {
    if (user) {
      await signOut(auth);
      setIsLogin(false);
      navigate("/");
    } else {
      navigate("/signin");
    }
  };

  const Nav = [
    { label: "나불나불", router: "/board" },
    { label: "방명록", router: "/guest" },
    { label: user ? "MY PAGE" : "", router: user ? "/mypage" : "" },
  ];

  return (
    <header className="flex flex-row justify-between  items-center min-w-[480px] min-h-[100px] px-4 border  border-b-neutral-300 mb-[40px] lg:px-[130px]  lg:w-full ">
      <div className="flex flex-row items-center justify-center gap-8 lg:min-w-[700px] lg:justify-between ">
        <h1
          onClick={() => navigate("/")}
          className="font-DancingScript text-[48px] font-bold cursor-pointer"
        >
          Anyang Girls
        </h1>

        <ul className="flex flex-row gap-8 cursor-pointer">
          {Nav.map((list) => {
            return (
              <li
                key={list.label}
                onClick={() => navigate(list.router)}
                className="text-[20px] lg:text-[26px] font-bold text-neutral-800 hover:text-[#88AB8E] transition"
              >
                {list.label}
              </li>
            );
          })}
        </ul>
      </div>
      <div className="flex flex-row items-center gap-6 cursor-pointer">
        <Button
          title={user ? "로그아웃" : "로그인"}
          onClick={onClickLog}
          className={
            user
              ? "bg-none text-[18px] font-bold hover:text-neutral-600 transition"
              : ""
          }
        />
        <Button
          title={`${user ? `${user?.displayName}님` : "회원가입"}`}
          onClick={!user ? goToSignUp : null}
          className={`${
            user
              ? "text-[18px] font-bold hover:text-neutral-600 transition"
              : "hidden lg:block w-[100px] h-full  px-[8px] py-[12px] border border-gray-300 rounded-[8px] bg-[#88AB8E] font-bold text-[20px] text-center text-white hover:bg-[#AFC8AD]"
          }`}
        />
      </div>
    </header>
  );
};

export default Header;
