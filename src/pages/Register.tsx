import { Mail, Lock, User } from "lucide-react";

import { useForm } from "react-hook-form";
import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";
import { registerUser } from "../services/auth.service";
import Input from "../components/Input";
import Button from "../components/Button";
import Navbar from "../components/NavBar";

export default function Register() {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const onSubmit = async (data: any) => {
    try {
      setLoading(true);
      setError("");

      await registerUser(data);

      navigate("/login");
    } catch {
      setError("Erro ao cadastrar usuário");
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
            <Link
              to="/login"
              className="px-4 pb-2 text-gray-600 dark:text-gray-400 font-bold"
            >
              Login
            </Link>

            <button className="px-4 pb-2 border-b-2 border-blue-500 text-blue-500 font-bold">
              Cadastrar
            </button>
          </div>

          <div className="bg-slate-100 dark:bg-[#0f172a] p-6 rounded-xl">
            <h2 className="text-xl font-semibold mb-2 text-blue-500 dark:text-white">
              Olá, vamos começar!
            </h2>

            <p className="text-gray-600 dark:text-gray-400 text-sm mb-6">
              Por favor, insira os dados solicitados para fazer cadastro.
            </p>

            <form onSubmit={handleSubmit(onSubmit)}>
              <Input
                label="Nome"
                name="name"
                placeholder="Insira o seu nome"
                register={register}
                icon={<User size={18} />}
              />

              <Input
                label="E-mail"
                name="email"
                placeholder="Insira o seu e-mail"
                register={register}
                icon={<Mail size={18} />}
              />

              <Input
                label="Senha"
                name="password"
                type="password"
                placeholder="Insira a sua senha"
                register={register}
                icon={<Lock size={18} />}
              />

              {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

              <Button isLoading={loading}>Continuar</Button>
            </form>

            {/* Termos */}
            <p className="text-xs text-gray-500 text-center mt-6">
              Ao clicar em continuar, você concorda com nossos{" "}
              <span className="underline">Termos de Serviço</span> e{" "}
              <span className="underline">Política de Privacidade</span>.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
