export default function Navbar() {
  const logout = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  };

  return (
    <div className="bg-white shadow p-4 flex justify-between">
      <h1 className="font-bold">Mini Twitter</h1>

      <button onClick={logout} className="text-red-500">
        Sair
      </button>
    </div>
  );
}
