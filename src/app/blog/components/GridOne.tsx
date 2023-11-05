/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useState } from "react";
import Link from "next/link";
import BlogData from "@/data/BlogData.json";
import {
  FaPlay,
  FaAngleRight,
  FaAngleLeft,
} from "react-icons/fa";
import FsLightbox from 'fslightbox-react';
import Slider from "react-slick";

const allBlogData = BlogData;

const BlogGridOne = () => {
  const [toggler, setToggler] = useState(false);

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

  var slideSettings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SlickNextArrow />,
    prevArrow: <SlickPrevArrow />,
  };

  const [blogs] = useState(allBlogData);
  const [pageNumber, setPageNumber] = useState(0);

  // FIXME: THIS WAS USED for the pagination but right now there ir no pagination.
  const blogsPerPage = 20;
  const pageVisited = pageNumber * blogsPerPage;

  // TODO: Replace direct path with the env variables if possible
  // TODO: Add pagination.
  console.log(process.env.PUBLIC_URL, "logg");

  return (
    <>
      {blogs.slice(pageVisited, pageVisited + blogsPerPage).map((data) => (
        <div className="blog-grid" key={data.id}>
          <h3 className="title">
            <Link className="no-underline" href={`/blog/${data.id}`}>{data.title}</Link>
          </h3>

          <div className="author">
            <div className="author-thumb">
              <img src={`/blog/${data.author_avatar}`} alt="Blog Author" />
            </div>
            <div className="info">
              <h6 className="author-name">
                <a>{data.author_name}</a>
              </h6>
              <ul className="blog-meta list-unstyled">
                <li>{data.post_date}</li>
                <li>{data.read_time}</li>
              </ul>
            </div>
          </div>

          <div className="post-thumbnail">
            {Array.isArray(data.large_thumb) ? (
              <Slider {...slideSettings} className="slick-arrow-nav">
                {data.large_thumb.map((data, index) => (
                  <div className="slide-item" key={index}>
                    <img src={`/blog/${data}`} alt="Blog" />
                  </div>
                ))}
              </Slider>
            ) : (
              <Link href={`/blog/${data.id}`}>
                <img src={`/blog/${data.large_thumb}`} alt="Blog" />
              </Link>
            )}

            {data.format === "video" ? (
              <>
                <div className="popup-video">
                  <button
                    className="play-btn"
                    onClick={() => setToggler(!toggler)}
                  >
                    <FaPlay />
                  </button>
                </div>
                <FsLightbox toggler={ toggler } sources={ ['https://www.youtube.com/watch?v=1iIZeIy7TqM'] }/>
              </>
            ) : (
              ""
            )}
          </div>
          <p>{data.excerpt}</p>
          <Link href={`/blog/${data.id}`} className="axil-btn btn-borderd btn-large">Read More</Link>
        </div>
      ))}
    </>
  );
};

export default BlogGridOne;
