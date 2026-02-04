type AuthInputProps = {
  label: string;
  type: string;
  value: string;
  error?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const AuthInput = ({
  label,
  type,
  value,
  error,
  onChange,
}: AuthInputProps) => {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-sm">{label}</label>

      <input
        type={type}
        value={value}
        onChange={onChange}
        className={`p-3 bg-neutral-900 border ${
          error ? "border-red-500" : "border-neutral-700"
        } outline-none`}
      />

      {error && <span className="text-red-500 text-xs">{error}</span>}
    </div>
  );
};
