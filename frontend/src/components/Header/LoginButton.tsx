// components/Header/LoginButton.tsx
import { Link } from "react-router-dom";

export const LoginButton = () => {
  return (
    <Link
      to="/login"
      className="px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors text-sm font-medium"
    >
      Entrar
    </Link>
  );
};
