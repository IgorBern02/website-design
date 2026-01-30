export type HeaderProps = {
  isMenuOpen: boolean;
  onMenuToggle: () => void;
  onCartToggle: () => void;
};

export type SidebarProps = {
  isOpen: boolean;
  onClose: () => void;
};

export type MenuHamburguerProps = {
  isOpen: boolean;
  onToggle: () => void;
};
