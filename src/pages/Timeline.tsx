import { usePosts } from "../hooks/usePosts";
import PostCard from "../components/PostCard";
import CreatePost from "../components/CreatePost";
import Navbar from "../components/NavBar";

export default function Timeline() {
  const { data } = usePosts();

  return (
    <div className="bg-white dark:bg-gray-800">
      <Navbar />

      <h1 className="text-xl font-bold mb-4 dark:text-white">Feed</h1>

      <div className="max-w-xl mx-auto mt-6">
        <CreatePost />

        {data?.map((post: any) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}
