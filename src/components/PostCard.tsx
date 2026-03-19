import { likePost } from "../services/post.service";
import { useQueryClient } from "@tanstack/react-query";
import type { Post } from "../types/Post";

interface PostCardProps {
  post: Post;
}
export default function PostCard({ post }: PostCardProps) {
  const queryClient = useQueryClient();

  const handleLike = async () => {
    await likePost(post.id);
    queryClient.invalidateQueries({
      queryKey: ["posts"],
    });
  };

  return (
    <div className="border p-4 rounded mb-4">
      <h2 className="font-bold">{post.title}</h2>
      <p>{post.content}</p>

      {post.image && <img src={post.image} className="mt-2" />}

      <button onClick={handleLike} className="text-red-500 mt-2">
        ❤️ {post.likesCount}
      </button>
    </div>
  );
}
