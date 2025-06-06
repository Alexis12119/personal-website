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
  pattern?: string;
}) {
  return (
    <div className="relative">
      <input
        type={type}
        className="
    peer
    w-full
    border-b border-gray-300 dark:border-gray-600
    bg-transparent
    py-4 px-1     /* increase vertical padding */
    text-gray-900 dark:text-gray-100
    focus:outline-none
    focus:border-indigo-500
  "
        placeholder=" "
      />

      <label
        className="
    absolute left-1 text-gray-500 dark:text-gray-400 text-sm transition-all
    peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400
    peer-focus:top-0 peer-focus:text-sm peer-focus:text-indigo-500
  "
      >
        {label}
      </label>
    </div>
  );
}
