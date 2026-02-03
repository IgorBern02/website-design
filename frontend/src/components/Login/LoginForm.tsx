import { useState } from "react";
import { AuthInput } from "./AuthInput";

export const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ email, password });
    // depois aqui entra a chamada da API
  };

  return (
    <form
      onSubmit={handleLogin}
      className="w-full max-w-md bg-neutral-950 p-10 flex flex-col gap-6 text-neutral-200 font-comfortaa"
    >
      <h2 className="text-2xl font-bold tracking-widest">LOGIN</h2>

      <AuthInput
        label="Email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <AuthInput
        label="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button className="mt-4 bg-white text-black py-3 font-bold text-sm uppercase">
        Sign In
      </button>
    </form>
  );
};
