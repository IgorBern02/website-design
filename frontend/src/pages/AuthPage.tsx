import { useState } from "react";
import { LoginForm } from "../components/Login/LoginForm";
import { RegisterForm } from "../components/Login/RegisterForm";

export const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-6">
      <div className="flex flex-col items-center gap-6">
        {isLogin ? <LoginForm /> : <RegisterForm />}

        <button
          onClick={() => setIsLogin(!isLogin)}
          className="text-sm text-neutral-400 hover:text-white transition"
        >
          {isLogin
            ? "Don't have an account? Create one"
            : "Already have an account? Sign in"}
        </button>
      </div>
    </div>
  );
};
