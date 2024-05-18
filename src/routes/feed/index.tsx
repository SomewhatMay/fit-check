import { useEffect, useRef, useState } from "react";
import { Post, usePosts } from "../../contexts/posts-context";
import { FeedCard } from "./feed-card";

export function Feed() {
  const posts = usePosts();
  const [visiblePosts, setVisiblePosts] = useState<Post[]>([]);
  const sentinelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleObserver = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          loadMorePosts();
        }
      });
    };

    const observer = new IntersectionObserver(handleObserver, {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    });

    const sentinel = sentinelRef.current;
    if (sentinel) {
      observer.observe(sentinel);
    }

    return () => {
      if (sentinel) {
        observer.unobserve(sentinel);
      }
    };
  }, [sentinelRef]);

  const loadMorePosts = () => {
    setVisiblePosts((prevPosts) => {
      const remainingPosts = posts.slice(
        prevPosts.length,
        prevPosts.length + 2
      );

      return [...prevPosts, ...remainingPosts];
    });
  };

  useEffect(() => {
    loadMorePosts();
  }, []);

  return (
    <>
      <div className="text-7xl w-full px-[2rem] my-[2rem] text-center mt-[2.5rem]">
        Feed
      </div>

      <div className="overflow-y-auto mt-[2rem] overflow-x-clip overscroll-y-contain">
        {visiblePosts.map((post, index) => (
          <FeedCard
            key={post.username}
            post={post}
          />
        ))}
        {/* Sentinel element */}
        <div
          ref={sentinelRef}
          className="h-[2rem]"
        />
      </div>
      {visiblePosts.length === posts.length && (
        <div className="text-4xl text-center mt-0 mb-[4rem]">
          You've reached the end!
        </div>
      )}
    </>
  );
}
