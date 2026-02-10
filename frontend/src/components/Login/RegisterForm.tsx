import { useState } from "react";
import { AuthInput } from "./AuthInput";
import { validateAuth } from "../../utils/validators";
import { useAuth } from "../../context/AuthContext";

export const RegisterForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [errors, setErrors] = useState<{
    name?: string;
    email?: string;
    password?: string;
  }>({});

  const { login } = useAuth();

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();

    const validationErrors = validateAuth({
      name,
      email,
      password,
    });

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) return;

    try {
      const res = await fetch("http://localhost:5000/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        alert(data.message);
        return;
      }

      login(data.token, data.user);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form
      onSubmit={handleRegister}
      className="w-full max-w-md bg-neutral-950 p-10 flex flex-col gap-6 text-neutral-200 font-comfortaa"
    >
      <h2 className="text-2xl font-bold tracking-widest">CREATE ACCOUNT</h2>

      <AuthInput
        label="Name"
        value={name}
        type="text"
        error={errors.name}
        onChange={(e) => setName(e.target.value)}
      />

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
        Register
      </button>
    </form>
  );
};
