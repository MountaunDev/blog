/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useState, useEffect } from "react";

import { FaAngleRight, FaAngleLeft } from "react-icons/fa";
import Slider from "react-slick";
import Header from "@/common/components/Header/Header";
import Breadcrumb from "@/common/components/Breadcumb/Breadcrumb";
import { getEntryById } from "@/app/services/blogService";
import { IModifiedBlogPostFields } from "@/types/blog";
import ImageComponent from "@/common/components/Image";
import PostAuthor from "./components/PostAuthor";

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

const BlogDetails = ({ params }: { params: { postId: string } }) => {
  const { postId } = params;
  const [postData, setPostData] = useState<IModifiedBlogPostFields>();

  useEffect(() => {
    (async () => {
      const data = await getEntryById(postId);
      setPostData(data[0]);
    })();
  }, [postId]);

  if (!postData) {
    // TODO: Add a nice loader here
    return "Loading";
  }

  return (
    <>
      <main className="main-wrapper">
        <Header />
        <Breadcrumb title={postData.title} page="Blog" />
        <div className="section-padding-equal">
          <div className="container">
            <div className="row row-40">
              <div className="col-lg-8">
                <div className="single-blog">
                  <div className="single-blog-content blog-grid">
                    <div className="post-thumbnail">
                      {Array.isArray(postData.imagesBanner) ? (
                        <Slider {...slideSettings} className="slick-arrow-nav">
                          {postData.imagesBanner.map((url, index) => (
                            <div className="slide-item" key={index}>
                              <ImageComponent src={url} />
                            </div>
                          ))}
                        </Slider>
                      ) : (
                        postData.imagesBanner && (
                          <ImageComponent src={postData.imagesBanner[0]} />
                        )
                      )}
                    </div>
                    <div className="author">
                      <div className="author-thumb">
                        <img src={`/blog/author-1.png`} alt="Blog Author" />
                      </div>
                      <div className="info">
                        <h6 className="author-name">Author or authors name</h6>
                        <ul className="blog-meta list-unstyled">
                          <li>{postData.publishDate}</li>
                          <li>{`${postData.minToRead || 10} min to read`}</li>
                        </ul>
                      </div>
                    </div>
                    {postData.content && postData.content}
                    {postData.featureImages && (
                      <div className="row">
                        {postData.featureImages.map((img, i) => (
                          <div className="col-6" key={i}>
                            <div className="featured-img">
                              <img src={img} alt="Blog" />
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
                {postData.postAuthor && (
                  <PostAuthor data={postData.postAuthor.fields} />
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default BlogDetails;
