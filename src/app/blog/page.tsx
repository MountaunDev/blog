"use client";
import React from "react";
import { useEffect, useState } from "react";
import BlogSidebar from "./components/BlogSideBar";
import PostList from "@/app/blog/components/PostList";
import Header from "@/common/components/Header/Header";
import Breadcrumb from "@/common/components/Breadcumb/Breadcrumb";
import { fetchBlogPosts } from "../services/blogService";

import ReactPaginate from "react-paginate";
import { IFetchBlogPostsResponse } from "@/types/blog";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

const PAGE_SIZE = 4;

export default function BlogHome() {
  const [data, setData] = useState<IFetchBlogPostsResponse>();

  const [pageNumber, setPageNumber] = useState(0);
  const postsContainerRef = React.useRef<any>(null);

  const fetchMoreEntries = async ({ selected }: { selected: number }) => {
    setPageNumber(selected);
    if (postsContainerRef.current) {
      postsContainerRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    (async function () {
      const data = await fetchBlogPosts(pageNumber, PAGE_SIZE);
      setData(data);
    })();
  }, [pageNumber]);

  if (!data) {
    return <p>loading</p>;
  }

  return (
    <>
      <main className="main-wrapper">
        <Header />
        <Breadcrumb title="Blog" page="Blog" />
        <div className="section-padding-equal" ref={postsContainerRef}>
          <section className="agency blog blog-sec blog-sidebar">
            <div className="container">
              <div className="row row-40">
                <div className="col-lg-9">
                  <div className="row">
                    {/* TODO: Replace null for the skeletonLoader component */}
                    {!data ? null : <PostList blogData={data.items} />}
                  </div>
                  <ReactPaginate
                    previousLabel={<FaArrowLeft />}
                    nextLabel={<FaArrowRight />}
                    pageCount={Math.ceil(data.total / PAGE_SIZE)}
                    onPageChange={fetchMoreEntries}
                    containerClassName={"pagination justify-content-center"}
                    previousLinkClassName={"prev"}
                    nextLinkClassName={"next"}
                    disabledClassName={"disabled"}
                    activeClassName={"current"}
                  />
                </div>
                <div className="col-lg-3">
                  <BlogSidebar />
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
// Image by <a href="https://www.freepik.com/free-psd/3d-illustration-human-avatar-profile_58509057.htm#query=default%20avatar&position=39&from_view=keyword&track=ais&uuid=cb3bbe3b-6e10-4a44-a39b-ebf587ab07a4">Freepik</a>
