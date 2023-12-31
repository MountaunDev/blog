import React from "react";
import Link from "next/link";
import { IModifiedBlogPostFields } from "@/types/blog";
import { extractDate_dd_mm_yyyy } from "@/common/util/date";

interface RecentPostsProps {
  posts: IModifiedBlogPostFields[];
}

const RecentPosts = ({ posts }: RecentPostsProps) => {
  return (
    <div className="post-list-wrap">
      {posts.slice(0, 3).map((data, index) => (
        <div className="single-post" key={index}>
          <div className="post-thumbnail">
            <Link href={`/blog/${data.id}`}>
              <img
                src={data.imagesBanner ? data.imagesBanner[0] : "pending/"}
                alt="Blog"
              />
            </Link>
          </div>
          <div className="post-content">
            <h6 className="title">
              <Link className="no-underline" href={`/blog/${data.id}`}>
                {data.title.length > 40
                  ? data.title.slice(0, 40) + "..."
                  : data.title}
              </Link>
            </h6>
            <ul className="blog-meta list-unstyled">
              <li>
                {extractDate_dd_mm_yyyy(
                  data.publishDate ? data.publishDate : "",
                )}
              </li>
              <li>{data.minToRead} Minutos </li>
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RecentPosts;
