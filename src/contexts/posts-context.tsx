import { createContext, useContext } from "react";
import postsJson from "../static/posts.json";

export interface Post {
  username: string;
  profileImageUrl: string;
  postThumbnailUrl: string;
  likeCount: number;
  caption: string;
  commentCount: number;
}

const postsContext = createContext<Post[] | undefined>(undefined);

export function usePosts(): Post[] {
  const posts = useContext(postsContext);

  if (!posts) {
    throw new Error("usePosts must be used within a PostsProvider");
  }

  return posts;
}

export function PostsProvider({ children }: { children: React.ReactNode }) {
  return (
    <postsContext.Provider value={postsJson.data}>
      {children}
    </postsContext.Provider>
  );
}
