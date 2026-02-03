type AuthInputProps = {
  label: string;
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const AuthInput = ({
  label,
  type = "text",
  value,
  onChange,
}: AuthInputProps) => {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-sm text-neutral-400">{label}</label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        className="bg-neutral-900 border border-neutral-700 px-4 py-3 text-sm outline-none focus:border-white transition"
      />
    </div>
  );
};
