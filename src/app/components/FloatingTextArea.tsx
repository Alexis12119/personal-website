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
        className="
    peer
    w-full
    border-b border-gray-300 dark:border-gray-600
    bg-transparent
    py-4 px-1     /* increase vertical padding to match input */
    text-gray-900 dark:text-gray-100
    focus:outline-none
    focus:border-indigo-500
    resize-none
  "
        placeholder=" "
      />

      <label
        className="
    absolute left-1 text-gray-500 dark:text-gray-400 text-sm transition-all
    peer-placeholder-shown:top-6 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400
    peer-focus:top-0 peer-focus:text-sm peer-focus:text-indigo-500
  "
      >
        {label}
      </label>
    </div>
  );
}
