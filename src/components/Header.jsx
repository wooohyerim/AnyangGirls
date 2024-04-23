import { useNavigate } from "react-router-dom";
import Button from "./common/Button";

const Header = () => {
  const navigate = useNavigate();

  return (
    <header className=" flex flex-row justify-between  items-center min-w-[480px] h-[100px] px-4 border  border-b-neutral-300 mb-4 lg:px-[120px]  lg:w-full ">
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
                className="text-[20px] lg:text-[24px] font-bold text-neutral-800 hover:text-neutral-600 transition"
              >
                {list.label}
              </li>
            );
          })}
        </ul>
      </div>
      <div className="flex flex-row items-center gap-6 cursor-pointer">
        <Button
          title={"로그인"}
          onClick={() => {}}
          className={
            "w-[100px] h-full  px-[8px] py-[12px] border border-gray-300 rounded-[8px] bg-[#88AB8E] font-bold text-[20px] text-center text-white hover:bg-[#AFC8AD]"
          }
        />
        <Button
          title={"회원가입"}
          onClick={() => {}}
          className={
            "hidden lg:block w-[100px] h-full  px-[8px] py-[12px] border border-gray-300 rounded-[8px] bg-[#88AB8E] font-bold text-[20px] text-center text-white hover:bg-[#AFC8AD]"
          }
        />
      </div>
    </header>
  );
};

export default Header;

const Nav = [
  { label: "소개하기", router: "/introduce" },
  { label: "나불나불", router: "/board" },
  { label: "방명록", router: "/guest" },
];
