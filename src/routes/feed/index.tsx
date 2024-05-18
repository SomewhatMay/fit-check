import { usePosts } from "../../contexts/posts-context";
import { FeedCard } from "./feed-card";

export function Feed() {
  const posts = usePosts();

  return (
    <div className="pt-[4rem] overflow-x-clip overflow-y-auto overscroll-y-contain">
      {posts.slice(0, 10).map((post) => (
        <FeedCard post={post} />
      ))}
    </div>
  );
}
