import React from "react";
import Link from "next/link";
//import WidgetPost from "./widget/WidgetPost";
import Image from "@/common/components/Image";
//import WidgetCategory from "./widget/WidgetCategory";
import {
  FaSearch,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaPinterest,
  FaYoutube,
} from "react-icons/fa";

const BlogSidebar = () => {
  return (
    <div className="axil-sidebar">
      <div className="widget widget-search">
        <h4 className="widget-title">Search</h4>
        <form action="#" className="blog-search">
          <input type="text" placeholder="Search…" />
          <button className="search-button">
            <FaSearch />
          </button>
        </form>
      </div>
      <div className="widget widget-categories">
        <h4 className="widget-title">Categories</h4>
      </div>
      <div className="widget widge-social-share">
        <div className="blog-share">
          <h5 className="title">Follow:</h5>
          <ul className="social-list list-unstyled">
            <li>
              <a href="https://facebook.com/">
                <FaFacebookF />
              </a>
            </li>
            <li>
              <a href="https://twitter.com/">
                <FaTwitter />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/">
                <FaInstagram />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/">
                <FaLinkedinIn />
              </a>
            </li>
            <li>
              <a href="https://www.pinterest.com/">
                <FaPinterest />
              </a>
            </li>
            <li>
              <a href="https://www.youtube.com/">
                <FaYoutube />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="widget widget-recent-post">
        <h4 className="widget-title">Recent post</h4>
        {/* <WidgetPost /> */}
      </div>
      <div className="widget widget-banner-ad">
        <Link className="no-underline" href={`/blog`}>
          {/* TODO:: Temporal image while the real one is migrated to this project  */}
          <Image
            src={`/blog/author_female.jpg`}
            alt="Blog Author"
            width={80}
            height={80}
          />
        </Link>
      </div>
    </div>
  );
};

export default BlogSidebar;
