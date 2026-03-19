import { useForm } from "react-hook-form";
import { loginUser } from "../../services/auth.service";

export default function Login() {
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data: any) => {
    const response = await loginUser(data);

    localStorage.setItem("token", response.token);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto mt-10">
      <input
        {...register("email")}
        placeholder="Email"
        className="border p-2 w-full mb-4"
      />

      <input
        {...register("password")}
        type="password"
        placeholder="Senha"
        className="border p-2 w-full mb-4"
      />

      <button className="bg-blue-500 text-white p-2 w-full">Login</button>
    </form>
  );
}
