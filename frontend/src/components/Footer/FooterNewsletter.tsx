export const FooterNewsletter = () => {
  return (
    <div className="flex flex-col gap-4">
      <h3 className="text-white font-semibold">Stay in the loop</h3>
      <p className="text-sm text-neutral-400">
        Receive news, exclusive drops, and discounts.
      </p>
      <div className="flex">
        <input
          type="email"
          placeholder="Seu email"
          className="w-full px-4 py-2 bg-neutral-800 text-sm outline-none"
        />
        <button className="px-4 bg-white text-black text-sm font-bold">
          Join
        </button>
      </div>
    </div>
  );
};
