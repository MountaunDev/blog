/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";
import { IModifiedBlogPostFields } from "@/types/blog";
import PostThumbnail from "./PostThumbnail";
interface Props {
  blogData: IModifiedBlogPostFields[];
}

const PostList = ({ blogData }: Props) => {
  return (
    <>
      {blogData.map((data) => (
        <div className="blog-grid" key={data.id}>
          <h3 className="title">
            <Link className="no-underline" href={`/blog/${data.id}`}>
              {data.title}
            </Link>
          </h3>

          <div className="author">
            <div className="author-thumb">
              {/* TODO: This should not be always a default image */}
              <img
                src={`/blog/${data.postAuthor && data.postAuthor.fields.sex === 'M' ? 'author_male' : 'author_female'}.jpg`}
                alt="Blog Author"
              />
            </div>
            <div className="info">
              <h6 className="author-name">
                {data.postAuthor && <a>{data.postAuthor.fields.name}</a>}
              </h6>
              <ul className="blog-meta list-unstyled">
                <li>{data.publishDate}</li>
                <li>{`${data.minToRead || "2"} min to read`}</li>
              </ul>
            </div>
          </div>
          <PostThumbnail imagesBanner={data.imagesBanner}/>
          <p>{data.shortDescription}</p>
          <Link
            href={`/blog/${data.id}`}
            className="axil-btn btn-borderd btn-large"
          >
            Leer más
          </Link>
        </div>
      ))}
    </>
  );
};

export default PostList;
