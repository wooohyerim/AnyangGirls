import { useNavigate } from "react-router-dom";
import { FirebaseError } from "firebase/app";
import { updateProfile, createUserWithEmailAndPassword } from "firebase/auth";
import { addDoc, collection } from "firebase/firestore";
import { auth, db } from "../firebase/firebase";
import useUserState from "../hooks/useUserState";
import Button from "../components/common/Button";
import SignLayout from "../components/layout/SignLayout";
import Input from "../components/common/Input";

const SignUp = () => {
  const nav = useNavigate();

  const {
    userName,
    userEmail,
    password,
    pwConfirm,
    quiz,
    setUserName,
    setUserEmail,
    setPassword,
    setPasswordConfirm,
    setQuiz,
  } = useUserState();

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    switch (name) {
      case "userName":
        setUserName(value);
        break;
      case "userEmail":
        setUserEmail(value);
        break;
      case "password":
        setPassword(value);
        break;
      case "pwConfirm":
        setPasswordConfirm(value);
        break;
      case "quiz":
        setQuiz(value);
        break;
      default:
        break;
    }
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    let errMessage = "";
    switch (true) {
      case userName === "":
        errMessage = "이름을 입력해 주세요.";
        break;
      case userEmail === "":
        errMessage = "이메일을 입력하세요.";
        break;
      case password === "":
        errMessage = "비밀번호를 입력하세요.";
        break;
      case password !== pwConfirm:
        errMessage = "비밀번호가 일치하지 않습니다.";
        break;
      case quiz === "":
        errMessage = "정답을 입력해 주세요.";
        break;
      case quiz !== "목련":
        errMessage = "정답을 다시 입력해 주세요.";
        break;
      default:
        break;
    }

    if (errMessage !== "") {
      alert(errMessage);
      return;
    }

    try {
      const credential = await createUserWithEmailAndPassword(
        auth,
        userEmail,
        password
      );
      const user = credential.user;
      await updateProfile(user, {
        displayName: userName,
      });
      await addDoc(collection(db, "users"), {
        uid: user.uid,
        email: user.email,
        userName: user.displayName,
      });
      alert("회원가입에 성공하셨습니다.");
      nav("/signin");
      // console.log("user", user);
      // console.log("doc", docRef);
    } catch (error: unknown) {
      const err = error as FirebaseError;
      switch (err.code) {
        case "auth/invalid-email":
          alert("이메일을 바르게 입력해주세요.");
          break;
        case "auth/weak-password":
          alert("비밀번호가 너무 쉬워요.");
          break;
        case "auth/email-already-in-use":
          alert("등록된 이메일 입니다.");
          break;
        default:
          alert("회원가입 실패");
          break;
      }
      setUserName("");
      setUserEmail("");
      setPassword("");
      setPasswordConfirm("");
      setQuiz("");
    }
  };

  return (
    <SignLayout>
      <form
        onSubmit={onSubmit}
        className="flex flex-col gap-8  w-[500px] min-h-[800px] p-4 my-0 mx-auto bg-[#EEE7DA] items-center"
      >
        <h1 className="text-[36px] font-bold bg-[#EEE7DA] text-center ">
          Sign UP
        </h1>
        <Input
          type={"text"}
          placeholder={"이름을 입력해 주세요."}
          name={"userName"}
          value={userName}
          onChange={handleChangeInput}
        />
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
        <Input
          type={"password"}
          name={"pwConfirm"}
          value={pwConfirm}
          placeholder="비밀번호를 다시 입력해 주세요."
          onChange={handleChangeInput}
        />
        <Input
          type={"text"}
          name={"quiz"}
          value={quiz}
          placeholder={"안양여중고의 교화는?"}
          onChange={handleChangeInput}
        />
        <div className="flex gap-8 bg-[#EEE7DA]">
          <Button
            type="submit"
            title={"가입하기"}
            className="cursor-pointer w-[100px] h-[60px] text-center bg-[#AFC8AD] hover:bg-[#88AB8E] text-white text-[24px] py-3 font-bold transition"
          />
          <Button
            title={"취소하기"}
            type="button"
            onClick={() => nav(-1)}
            className={
              "cursor-pointer w-[100px] h-[60px] text-center bg-[#AFC8AD] hover:bg-[#88AB8E] text-white text-[24px] py-3 font-bold transition"
            }
          />
        </div>
        <div className="bg-[#EEE7DA] font-bold text-neutral-500 text-[18px]">
          이미 회원가입을 하셨다면 |{" "}
          <span
            className="bg-[#EEE7DA] cursor-pointer hover:text-neutral-700 transition"
            onClick={() => nav("/signin")}
          >
            로그인
          </span>
        </div>
      </form>
    </SignLayout>
  );
};

export default SignUp;
