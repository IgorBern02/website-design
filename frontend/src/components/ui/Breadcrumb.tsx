import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type BreadcrumbItem = {
  label: string;
  href?: string;
};

type BreadcrumbProps = {
  items: BreadcrumbItem[];
  showBackButton?: boolean;
};

export const Breadcrumb = ({
  items,
  showBackButton = true,
}: BreadcrumbProps) => {
  const navigate = useNavigate();

  return (
    <nav
      aria-label="Breadcrumb"
      className="flex items-center gap-4 font-comfortaa text-[12px] tracking-wide"
    >
      {showBackButton && (
        <button
          onClick={() => navigate(-1)}
          className="hover:opacity-60 transition-opacity cursor-pointer"
          aria-label="Go back"
        >
          <FontAwesomeIcon
            icon="arrow-left"
            className="text-gray-800 text-sm"
          />
        </button>
      )}

      <ol className="flex items-center gap-2">
        {items.map((item) => (
          <li key={item.label} className="flex items-center gap-2">
            {item.href ? (
              <Link to={item.href} className="text-gray-400 ">
                {item.label}
              </Link>
            ) : (
              <span className="text-gray-600 font-medium">{item.label}</span>
            )}
            <span className="text-gray-300 last:hidden">•</span>
          </li>
        ))}
      </ol>
    </nav>
  );
};
