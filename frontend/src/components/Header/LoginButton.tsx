import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

export const LoginButton = () => {
  const { user, logout, isAuthenticated } = useAuth();

  return (
    <>
      {!isAuthenticated ? (
        <Link
          to="/login"
          className="px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors text-sm font-medium"
        >
          Entrar
        </Link>
      ) : (
        <div className="flex items-center gap-3">
          <span className="font-semibold font-comfortaa">
            account {user?.name}
          </span>
          <button
            onClick={logout}
            className="px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors text-sm font-medium"
          >
            Sair
          </button>
        </div>
      )}
    </>
  );
};
