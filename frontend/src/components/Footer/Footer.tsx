export const Footer = () => {
  return (
    <footer className="w-full bg-neutral-950 text-neutral-200 font-comfortaa">
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Marca */}
        <div className="flex flex-col gap-4">
          <h2 className="text-2xl font-bold tracking-widest text-white">
            AURA
          </h2>
          <p className="text-sm text-neutral-400">
            Authentic streetwear for those who live the urban culture. Limited
            pieces. Uncompromising style.
          </p>
        </div>

        {/* Navegação */}
        <div className="flex flex-col gap-3 text-sm">
          <h3 className="text-white font-semibold mb-2">Shop</h3>
          <a href="#" className="hover:text-white transition">
            New Drops
          </a>
          <a href="#" className="hover:text-white transition">
            Best Sellers
          </a>
          <a href="#" className="hover:text-white transition">
            Collections
          </a>
          <a href="#" className="hover:text-white transition">
            Sale
          </a>
        </div>

        {/* Suporte */}
        <div className="flex flex-col gap-3 text-sm">
          <h3 className="text-white font-semibold mb-2">Support</h3>
          <a href="#" className="hover:text-white transition">
            Contact
          </a>
          <a href="#" className="hover:text-white transition">
            Shipping
          </a>
          <a href="#" className="hover:text-white transition">
            Returns
          </a>
          <a href="#" className="hover:text-white transition">
            FAQ
          </a>
        </div>

        {/* Newsletter */}
        <div className="flex flex-col gap-4">
          <h3 className="text-white font-semibold">Stay in the loop</h3>
          <p className="text-sm text-neutral-400">
            Receive news, exclusive drops, and discounts.
          </p>
          <div className="flex">
            <input
              type="email"
              placeholder="Your email"
              className="w-full px-4 py-2 bg-neutral-800 text-sm outline-none"
            />
            <button className="px-4 bg-white text-black text-sm font-bold cursor-pointer">
              Join
            </button>
          </div>
        </div>
      </div>

      {/* Linha inferior */}
      <div className="border-t border-neutral-800 py-6 px-6 flex flex-col md:flex-row items-center justify-between text-xs text-neutral-500">
        <span>© {new Date().getFullYear()} AURA. All rights reserved.</span>
        <div className="flex gap-6 mt-4 md:mt-0">
          <a href="#" className="hover:text-white transition">
            Instagram
          </a>
          <a href="#" className="hover:text-white transition">
            Twitter
          </a>
          <a href="#" className="hover:text-white transition">
            TikTok
          </a>
        </div>
      </div>
    </footer>
  );
};
