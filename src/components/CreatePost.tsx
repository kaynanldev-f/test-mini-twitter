import { useForm } from "react-hook-form";
import { createPost } from "../services/post.service";
import { useQueryClient } from "@tanstack/react-query";

export default function CreatePost() {
  const { register, handleSubmit, reset } = useForm();
  const queryClient = useQueryClient();

  const onSubmit = async (data: any) => {
    await createPost(data);

    queryClient.invalidateQueries({
      queryKey: ["posts"],
    });
    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-white p-4 rounded shadow mb-4"
    >
      <input
        {...register("title")}
        placeholder="Título"
        className="border p-2 w-full mb-2"
      />

      <textarea
        {...register("content")}
        placeholder="O que você está pensando?"
        className="border p-2 w-full mb-2"
      />

      <input
        {...register("image")}
        placeholder="URL da imagem"
        className="border p-2 w-full mb-2"
      />

      <button className="bg-blue-500 text-white p-2 w-full">Postar</button>
    </form>
  );
}
