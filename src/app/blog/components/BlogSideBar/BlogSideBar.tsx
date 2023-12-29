"use client";
import { getAllTopics } from "@/app/services/blogService";
import { FetchAllTopicsResponse } from "@/types/topic";
import Link from "next/link";
import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaPinterest,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import TopicBadge from "./TopicBagde";
import { FilterPostByBadge } from "../../page";

interface BlogSideBarProps {
  filterPostsByBadge: FilterPostByBadge;
}

const BlogSidebar = ({ filterPostsByBadge }: BlogSideBarProps) => {
  const [topicsList, setTopicsList] = React.useState<FetchAllTopicsResponse>();

  React.useEffect(() => {
    (async function () {
      const topicsData = await getAllTopics();
      setTopicsList(topicsData);
    })();
  }, []);

  return (
    <div className="axil-sidebar">
      <div className="widget widget-categories">
        <h4 className="widget-title">Categories</h4>
        {topicsList && (
          <TopicBadge
            filterPostsByBadge={filterPostsByBadge}
            topicsList={topicsList.items}
          />
        )}
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
        <Link href="#">
          {/* <img src={process.env.PUBLIC_URL + "/images/banner/widget-banner.png"} alt="banner" /> */}
          image
        </Link>
      </div>
    </div>
  );
};

export default BlogSidebar;
