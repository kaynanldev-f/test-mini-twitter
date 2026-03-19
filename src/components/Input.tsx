import type { ReactNode } from "react";

interface InputProps {
  label: string;
  type?: string;
  placeholder?: string;
  register: any;
  name: string;
  icon?: ReactNode;
}

export default function Input({
  label,
  type = "text",
  placeholder,
  register,
  name,
  icon,
}: InputProps) {
  return (
    <div className="mb-4">
      <label className="text-sm text-gray-600 dark:text-gray-400">
        {label}
      </label>

      <div className="relative mt-1">
        <input
          type={type}
          placeholder={placeholder}
          {...register(name)}
          className="
            w-full p-3 pr-10 rounded-lg
           bg-slate-100 dark:bg-[#1e293b] text-gray-600
            border border-gray-300 dark:border-gray-600
            focus:outline-none focus:border-blue-500
          "
        />

        <div className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
          {icon}
        </div>
      </div>
    </div>
  );
}
