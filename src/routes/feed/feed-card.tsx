import { Post } from "../../contexts/posts-context";
import likeIcon from "../../static/like-icon.png";
import commentIcon from "../../static/comment-icon.png";
import shareIcon from "../../static/share-icon.png";
import { readableNumber } from "../../util/readable-number";

interface props {
  post: Post;
}

export function FeedCard({ post }: props) {
  return (
    <div className="w-full px-[8rem] mb-[5.5rem]">
      <div className="flex items-center">
        <img
          src={post.profileImageUrl}
          alt={post.username}
          className="w-[6rem] rounded-full h-[6rem] aspect-square object-cover inline"
        />
        <span className="text-5xl ml-[2rem] translate-y-[-0.5rem]">
          {post.username}
        </span>
      </div>
      <img
        src={post.postThumbnailUrl}
        alt={post.username}
        className="w-full object-cover aspect-video mt-[1.75rem] rounded-[2rem] bg-black"
      />
      <div className="px-[2rem]">
        <div className="mt-[1.5rem] flex gap-[3rem] items-center">
          {/* Add like button */}
          {[likeIcon, commentIcon, shareIcon].map((icon, index) => {
            return (
              <img
                key={index}
                src={icon}
                alt="like"
                className="w-[4.5rem] object-contain aspect-square"
              />
            );
          })}
        </div>
        <div className="text-4xl mt-[1.5rem] text-gray-600">
          {readableNumber(post.likeCount)} likes
        </div>
        <div className="text-4xl mt-[1.5rem]">{post.caption}</div>
        <div className="text-4xl mt-[1.5rem] text-gray-600">
          View {readableNumber(post.commentCount)} comments {`>`}
        </div>
      </div>
    </div>
  );
}
