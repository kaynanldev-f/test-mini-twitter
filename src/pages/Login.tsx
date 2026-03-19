import { Mail, Lock } from "lucide-react";

import { useForm } from "react-hook-form";
import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";
import { loginUser } from "../services/auth.service";
import Input from "../components/Input";
import Button from "../components/Button";
import Navbar from "../components/NavBar";

export default function Login() {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const onSubmit = async (data: any) => {
    try {
      setLoading(true);
      setError("");

      const res = await loginUser(data);

      localStorage.setItem("token", res.token);
      navigate("/");
    } catch {
      setError("Credenciais inválidas");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-r bg-slate-100 dark:from-black dark:via-[#0a0f2c] dark:to-black">
        <div className="w-full max-w-md text-white">
          <h1 className="text-3xl font-bold text-center mb-6 text-blue-500 dark:text-white">
            Mini Twitter
          </h1>

          <div className="flex justify-center mb-6 border-b border-gray-300 dark:border-gray-700">
            <button className="px-4 pb-2 border-b-2 border-blue-500 text-blue-500 font-bold">
              Login
            </button>

            <Link
              to="/register"
              className="px-4 pb-2 text-gray-600 dark:text-gray-400 font-bold"
            >
              Cadastrar
            </Link>
          </div>

          <div className="bg-slate-100 dark:bg-[#0f172a]  p-6 rounded-xl ">
            <h2 className="text-blue-500 dark:text-white text-xl font-semibold mb-2">
              Olá, de novo!
            </h2>

            <p className="text-gray-600 dark:text-gray-400 text-sm mb-6">
              Insira seus dados para continuar.
            </p>

            <form onSubmit={handleSubmit(onSubmit)}>
              <Input
                label="E-mail"
                name="email"
                placeholder="Seu e-mail"
                register={register}
                icon={<Mail size={18} />}
              />

              <Input
                label="Senha"
                name="password"
                type="password"
                placeholder="Sua senha"
                register={register}
                icon={<Lock size={18} />}
              />

              {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

              <Button isLoading={loading}>Continuar</Button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
