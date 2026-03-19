import { usePosts } from "../src/hooks/usePosts";
import PostCard from "../src/components/PostCard";
import CreatePost from "../src/components/CreatePost";
import Navbar from "../src/components/NavBar";

import "./App.css";

export default function App() {
  const { data, isLoading } = usePosts();

  if (isLoading) return <p>Carregando...</p>;

  return (
    <div>
      <Navbar />

      <div className="max-w-xl mx-auto mt-6">
        <CreatePost />

        {data?.map((post: any) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}
