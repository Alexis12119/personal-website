export default function FloatingInput({
  label,
  name,
  type = "text",
  value,
  onChange,
  required = false,
}: {
  label: string;
  name: string;
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
}) {
  return (
    <div className="relative">
      <input
        type={type}
        name={name}
        id={name}
        value={value}
        onChange={onChange}
        required={required}
        className="peer w-full border-b border-gray-300 dark:border-gray-600 bg-transparent py-3 px-1 text-gray-900 dark:text-gray-100 focus:outline-none focus:border-indigo-500"
        placeholder=" "
      />

      <label
        htmlFor={name}
        className="absolute left-1 top-7 text-gray-500 dark:text-gray-400 text-sm transition-all
    peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400
    peer-focus:top-0 peer-focus:text-sm peer-focus:text-indigo-500"
      >
        {label}
      </label>
    </div>
  );
}
