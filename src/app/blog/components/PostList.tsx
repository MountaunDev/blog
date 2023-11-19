/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import Link from "next/link";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";
import { IModifiedBlogPostFields } from "@/types/blog";
import PostThumbnail from "./PostThumbnail";

function SlickNextArrow(props: any) {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <FaAngleRight />
    </div>
  );
}

function SlickPrevArrow(props: any) {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <FaAngleLeft />
    </div>
  );
}

const slideSettings = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  nextArrow: <SlickNextArrow />,
  prevArrow: <SlickPrevArrow />,
};

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
                src="https://images.ctfassets.net/dcyvpoci5no4/6jUMZOjesYvPThsZaMIIXo/1f4ff83eec6678e221e6b70e66ce0e89/author-1.png"
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
