import { useForm } from "react-hook-form";
import { registerUser } from "../../services/auth.service";

export default function Register() {
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data: any) => {
    await registerUser(data);
    alert("Usuário criado!");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto mt-10">
      <input
        {...register("name")}
        placeholder="Nome"
        className="border p-2 w-full mb-2"
      />
      <input
        {...register("email")}
        placeholder="Email"
        className="border p-2 w-full mb-2"
      />
      <input
        {...register("password")}
        type="password"
        placeholder="Senha"
        className="border p-2 w-full mb-2"
      />

      <button className="bg-green-500 text-white p-2 w-full">
        Criar conta
      </button>
    </form>
  );
}
