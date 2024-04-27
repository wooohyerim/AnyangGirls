import { create } from "zustand";

interface User {
  userName: string;
  userEmail: string;
  password: string;
  pwConfirm: string;
  quiz: string;
  isLogin: boolean;
}

interface UserAction {
  setUserName: (value: string) => void;
  setUserEmail: (value: string) => void;
  setPassword: (value: string) => void;
  setPasswordConfirm: (value: string) => void;
  setQuiz: (value: string) => void;
  setIsLogin: (value: boolean) => void;
}

const useUserState = create<User & UserAction>((set) => ({
  userName: "",
  userEmail: "",
  password: "",
  pwConfirm: "",
  quiz: "",
  isLogin: false,
  setUserName: (value) => set({ userName: value }),
  setUserEmail: (value) => set({ userEmail: value }),
  setPassword: (value) => set({ password: value }),
  setPasswordConfirm: (value) => set({ pwConfirm: value }),
  setQuiz: (value) => set({ quiz: value }),
  setIsLogin: () => set({ isLogin: true }),
}));

export default useUserState;
