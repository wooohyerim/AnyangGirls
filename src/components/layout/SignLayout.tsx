import React from "react";
import { useNavigate } from "react-router-dom";

const SignLayout = ({ children }: { children: React.ReactNode }) => {
  const navigate = useNavigate();
  return (
    <div>
      <header className="w-full h-[100px] mb-[100px]  border border-b-neutral-300">
        <h1
          onClick={() => navigate("/")}
          className="text-center mt-2 font-DancingScript text-[48px] font-bold cursor-pointer"
        >
          Anyang Girls
        </h1>
      </header>
      {children}
    </div>
  );
};

export default SignLayout;
