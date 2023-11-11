/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import Link from "next/link";
import { FaPlay, FaAngleRight, FaAngleLeft } from "react-icons/fa";
import FsLightbox from "fslightbox-react";
import Slider from "react-slick";
import { IModifiedBlogPostFields } from "@/types/blog";

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
  console.log("🚀 ~ file: GridOne.tsx:44 ~ BlogGridOne ~ blogData:", blogData);
  // TODO: Add pagination.
  console.log(process.env.PUBLIC_URL, "logg");

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
                {/* TODO: Add this field into the content Type to render dynamically */}
                <a>Juan Felipe Montaña</a>
              </h6>
              <ul className="blog-meta list-unstyled">
                <li>{data.publishDate}</li>
                {/* TODO: Add the time_to_read field to the content type */}
                <li>9 min to read</li>
              </ul>
            </div>
          </div>

          {/* <div className="post-thumbnail">
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
                <img
                  src={`https://images.ctfassets.net/dcyvpoci5no4/10pCIDvgZ5GbkkRdsPBhCE/077b8382b1c494efe2a442022e47ddab/large_thumb_1.png`}
                  alt="Blog"
                />
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
                <FsLightbox
                  toggler={toggler}
                  sources={["https://www.youtube.com/watch?v=1iIZeIy7TqM"]}
                />
              </>
            ) : (
              ""
            )}
          </div> */}
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
