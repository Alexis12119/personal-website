export default function FloatingTextarea({
  label,
  name,
  value,
  onChange,
  required = false,
}: {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  required?: boolean;
}) {
  return (
    <div className="relative">
      <textarea
        name={name}
        id={name}
        rows={4}
        value={value}
        onChange={onChange}
        required={required}
        className="peer w-full border-b border-gray-300 dark:border-gray-600 bg-transparent py-2 px-1 text-gray-900 dark:text-gray-100 focus:outline-none focus:border-indigo-500 resize-none"
        placeholder=" "
      />
      <label
        htmlFor={name}
        className="absolute left-1 top-1.5 text-gray-500 dark:text-gray-400 text-sm transition-all
          peer-placeholder-shown:top-5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400
          peer-focus:top-1.5 peer-focus:text-sm peer-focus:text-indigo-500"
      >
        {label}
      </label>
    </div>
  );
}
