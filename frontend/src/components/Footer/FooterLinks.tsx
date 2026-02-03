type FooterLinksProps = {
  title: string;
  links: string[];
};

export const FooterLinks = ({ title, links }: FooterLinksProps) => {
  return (
    <div className="flex flex-col gap-3 text-sm">
      <h3 className="text-white font-semibold mb-2">{title}</h3>
      {links.map((link) => (
        <a key={link} href="#" className="hover:text-white transition">
          {link}
        </a>
      ))}
    </div>
  );
};
