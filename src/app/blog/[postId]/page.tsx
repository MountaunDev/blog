/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useState } from "react";

// import FooterOne from '../common/footer/FooterOne';
// import CtaLayoutOne from "../component/cta/CtaLayoutOne";
// import BlogSidebar from "../component/blog/BlogSidebar";
// import BlogAuthor from "../component/blog/BlogAuthor";
// import Comment from "../component/blog/Comment";
// import ColorSwitcher from "../elements/switcher/ColorSwitcher";
// import SEO from "../common/SEO";
// import BlogListOne from "../component/blog/BlogListOne";
import FsLightbox from "fslightbox-react";
import { FaPlay, FaAngleRight, FaAngleLeft } from "react-icons/fa";
import Slider from "react-slick";
import Header from "@/common/components/Header/Header";
import Breadcrumb from "@/common/components/Breadcumb/Breadcrumb";
import BlogData from "@/data/BlogData.json";
import BlogAuthor from "../components/PostAuthor";

const allBlogData = BlogData;

const BlogDetails = ({ params }: { params: { postId: string } }) => {
  const blogId = parseInt(params.postId);

  const getBlogData = allBlogData.filter((blog) => blog.id === blogId);
  const detailsBlog = getBlogData[0];

  const [toggler, setToggler] = useState(false);

  function SlickNextArrow(props) {
    const { className, onClick } = props;
    return (
      <div className={className} onClick={onClick}>
        <FaAngleRight />
      </div>
    );
  }

  function SlickPrevArrow(props) {
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

  return (
    <>
      {/* <SEO title={detailsBlog.title} /> */}
      {/* <ColorSwitcher /> */}
      <main className="main-wrapper">
        <Header />
        <Breadcrumb title={detailsBlog.title} page="Blog" />
        <div className="section-padding-equal">
          <div className="container">
            <div className="row row-40">
              <div className="col-lg-8">
                <div className="single-blog">
                  <div className="single-blog-content blog-grid">
                    <div className="post-thumbnail">
                      {Array.isArray(detailsBlog.large_thumb) ? (
                        <Slider {...slideSettings} className="slick-arrow-nav">
                          {detailsBlog.large_thumb.map((data, index) => (
                            <div className="slide-item" key={index}>
                              <img
                                src={`/blog/${data}`}
                                alt="Blog"
                              />
                            </div>
                          ))}
                        </Slider>
                      ) : (
                        <img
                          src={`/blog/${detailsBlog.large_thumb}`}
                          alt="Blog"
                        />
                      )}

                      {detailsBlog.format === "video" ? (
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
                            sources={[
                              "https://www.youtube.com/watch?v=1iIZeIy7TqM",
                            ]}
                          />
                        </>
                      ) : (
                        ""
                      )}
                    </div>
                    <div className="author">
                      <div className="author-thumb">
                        <img
                          src={`/blog/${detailsBlog.author_avatar}`}
                          alt="Blog Author"
                        />
                      </div>
                      <div className="info">
                        <h6 className="author-name">
                          {detailsBlog.author_name}
                        </h6>
                        <ul className="blog-meta list-unstyled">
                          <li>{detailsBlog.post_date}</li>
                          <li>{detailsBlog.read_time}</li>
                        </ul>
                      </div>
                    </div>
                    {detailsBlog.body.map((data, i) => (
                      <div
                        key={i}
                        dangerouslySetInnerHTML={{ __html: data }}
                      ></div>
                    ))}

                    <div className="row">
                      {detailsBlog.features_img.map((img, i) => (
                        <div className="col-6" key={i}>
                          <div className="featured-img">
                            <img
                              src={"/blog" + img}
                              alt="Blog"
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <BlogAuthor data={detailsBlog} />
                {/* <Comment /> */}
              </div>
              {/* <div className="col-lg-4">
                <BlogSidebar />
                <p>BlogSidebar</p>
              </div> */}
            </div>
          </div>
        </div>

        {/* <div className="section section-padding-equal pt-0 related-blog-area">
          <div className="container">
            <div className="section-heading heading-left">
              <h3 className="title">Related Post</h3>
            </div>
            <div className="row g-0">
              <BlogListOne colSize="col-xl-6" itemShow="2" />
              <p>BlogListOne component</p>
            </div>
          </div>
        </div> */}
        {/* <CtaLayoutOne /> */}
        {/* <FooterOne parentClass="" /> */}
      </main>
    </>
  );
};

export default BlogDetails;
