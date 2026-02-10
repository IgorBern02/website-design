import { useState } from "react";
import { AuthInput } from "./AuthInput";
import { validateAuth } from "../../utils/validators";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { API } from "../../services/api";

export const LoginForm = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [errors, setErrors] = useState<{ email?: string; password?: string }>(
    {},
  );

  const { login } = useAuth();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    const validationErrors = validateAuth({ email, password });
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) return;

    const res = await fetch(`${API}/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    if (!res.ok) {
      const err = await res.json();
      alert(err.message);
      return;
    }

    const data = await res.json();

    // salva no contexto
    login(data.token, data.user);

    navigate("/");
  };

  return (
    <form
      onSubmit={handleLogin}
      className="w-full max-w-md bg-neutral-950 p-10 flex flex-col gap-6 text-neutral-200 font-comfortaa "
    >
      <h2 className="text-2xl font-bold tracking-widest">LOGIN</h2>

      <AuthInput
        label="Email"
        type="email"
        value={email}
        error={errors.email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <AuthInput
        label="Password"
        type="password"
        value={password}
        error={errors.password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button className="mt-4 bg-white text-black py-3 font-bold text-sm uppercase cursor-pointer">
        Sign In
      </button>
    </form>
  );
};
