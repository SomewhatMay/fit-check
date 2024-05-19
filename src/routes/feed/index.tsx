import { useEffect, useMemo, useRef, useState, useTransition } from "react";
import { Post, usePosts } from "../../contexts/posts-context";
import { FeedCard } from "./feed-card";
import { usePageIndex } from "../../contexts/page-index-context";

export function Feed() {
  const [, startTransition] = useTransition();
  const feedPageIndex = 0;
  const posts = usePosts();
  const [visiblePosts, setVisiblePosts] = useState<Post[]>([]);
  const sentinelRef = useRef<HTMLDivElement>(null);
  const currentPageIndex = usePageIndex();

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
    startTransition(() =>
      setVisiblePosts((prevPosts) => {
        const remainingPosts = posts.slice(
          prevPosts.length,
          prevPosts.length + 2
        );

        return [...prevPosts, ...remainingPosts];
      })
    );
  };

  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout> | undefined;
    if (currentPageIndex !== feedPageIndex) {
      startTransition(() => {
        timeoutId = setTimeout(() => {
          setVisiblePosts([]);
        }, 300);
      });
    } else {
      loadMorePosts();
    }

    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [currentPageIndex]);

  const postNodes = useMemo(
    () =>
      visiblePosts.map((post, index) => (
        <FeedCard
          key={post.username}
          post={post}
        />
      )),
    [visiblePosts]
  );

  return (
    <>
      <div className="text-7xl w-full px-[2rem] my-[2rem] text-center mt-[3.5rem]">
        Feed
      </div>

      <div className="overflow-y-auto mt-[2rem] overflow-x-clip overscroll-y-contain">
        {postNodes}
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
