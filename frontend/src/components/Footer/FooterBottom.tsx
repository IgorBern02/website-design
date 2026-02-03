export const FooterBottom = () => {
  return (
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
  );
};
