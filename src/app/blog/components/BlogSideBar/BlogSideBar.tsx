"use client";
import { getAllTopics } from "@/app/services/blogService";
import { FetchAllTopicsResponse } from "@/types/topic";
import React, { FormEvent } from "react";
import { FaLinkedinIn, FaSearch, FaTwitter, FaYoutube } from "react-icons/fa";
import TopicBadge from "./TopicBagde";
import { FilterPostByBadge } from "../../page";
import RecentPosts from "./RecentPosts";
import { IModifiedBlogPostFields } from "@/types/blog";

interface BlogSideBarProps {
  posts: IModifiedBlogPostFields[];
  searchPostsByQuery: ({ searchCriteria }: { searchCriteria: string }) => void;
  filterPostsByBadge: FilterPostByBadge;
}

const BlogSidebar = ({
  filterPostsByBadge,
  posts,
  searchPostsByQuery,
}: BlogSideBarProps) => {
  const [topicsList, setTopicsList] = React.useState<FetchAllTopicsResponse>();

  React.useEffect(() => {
    (async function () {
      const topicsData = await getAllTopics();
      setTopicsList(topicsData);
    })();
  }, []);

  const handleSubmitSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const target = e.target as typeof e.target & {
      "search-button": { value: string };
    };
    const searchCriteria = target["search-button"].value;
    searchPostsByQuery({ searchCriteria });
  };

  return (
    <div className="axil-sidebar">
      <div className="widget widget-search">
        <h4 className="widget-title">Search</h4>
        <form
          action="#"
          className="blog-search"
          onSubmit={(e) => handleSubmitSearch(e)}
        >
          <input type="text" placeholder="Search…" name="search-button" />
          <button className="search-button">
            <FaSearch />
          </button>
        </form>
      </div>
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
              <a href="https://twitter.com/">
                <FaTwitter />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/">
                <FaLinkedinIn />
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
        <RecentPosts posts={posts} />
      </div>
    </div>
  );
};

export default BlogSidebar;
