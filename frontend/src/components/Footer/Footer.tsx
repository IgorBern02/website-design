import { FooterBrand } from "./FooterBrand";
import { FooterLinks } from "./FooterLinks";
import { FooterNewsletter } from "./FooterNewsletter";
import { FooterBottom } from "./FooterBottom";

export const Footer = () => {
  return (
    <footer className="w-full bg-neutral-950 text-neutral-200 font-comfortaa">
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-12">
        <FooterBrand />

        <FooterLinks
          title="Shop"
          links={["New Drops", "Best Sellers", "Collections", "Sale"]}
        />

        <FooterLinks
          title="Support"
          links={["Contact", "Shipping", "Returns", "FAQ"]}
        />

        <FooterNewsletter />
      </div>

      <FooterBottom />
    </footer>
  );
};
