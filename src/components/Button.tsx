interface ButtonProps {
  children: React.ReactNode;
  isLoading?: boolean;
}

export default function Button({ children, isLoading }: ButtonProps) {
  return (
    <button
      className="
        w-full py-3 rounded-full
        bg-blue-500 hover:bg-blue-600
        transition font-semibold
        disabled:opacity-50
      "
      disabled={isLoading}
    >
      {isLoading ? "Carregando..." : children}
    </button>
  );
}
