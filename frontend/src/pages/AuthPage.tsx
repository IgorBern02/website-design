import { useState } from "react";
import { LoginForm } from "../components/Login/LoginForm";
import { RegisterForm } from "../components/Login/RegisterForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

export const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-6">
      <Link to="/" className="absolute top-10 left-10 p-2">
        <FontAwesomeIcon
          icon="arrow-left"
          className="text-white text-lg cursor-pointer"
        />
      </Link>

      <div className="flex flex-col items-center gap-6">
        {isLogin ? <LoginForm /> : <RegisterForm />}

        <button
          onClick={() => setIsLogin(!isLogin)}
          className="text-sm text-neutral-400 hover:text-white transition cursor-pointer"
        >
          {isLogin
            ? "Don't have an account? Create one"
            : "Already have an account? Sign in"}
        </button>
      </div>
    </div>
  );
};
