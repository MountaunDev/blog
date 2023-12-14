"use client";
import Header from "@/common/components/Header/Header";
import Breadcrumb from "@/common/components/Breadcumb/Breadcrumb";
import PostList from "@/app/blog/components/PostList";
import { fetchBlogPosts } from "../services/blogService";
import { useEffect, useState } from "react";
import { IFetchBlogPostsResponse } from "@/types/blog";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import ReactPaginate from "react-paginate";
import PostListItemSkeleton from "./components/PostListItemSkeleton";

const PAGE_SIZE = 2;

export default function BlogHome() {
  const [data, setData] = useState<IFetchBlogPostsResponse>();

  const [pageNumber, setPageNumber] = useState(0);

  const fetchMoreEntries = async ({ selected }: { selected: number }) => {
    setPageNumber(selected);
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
        <div className="section-padding-equal">
          <div className="container">
            <div className="row row-40">
              <div className="col-lg-8">
                {!data ? (
                  <PostListItemSkeleton />
                ) : (
                  <PostList blogData={data.items} />
                )}
                <ReactPaginate
                  previousLabel={<FaArrowLeft />}
                  nextLabel={<FaArrowRight />}
                  pageCount={4}
                  onPageChange={fetchMoreEntries}
                  containerClassName={"pagination justify-content-start"}
                  previousLinkClassName={"prev"}
                  nextLinkClassName={"next"}
                  disabledClassName={"disabled"}
                  activeClassName={"current"}
                />
              </div>
              <div className="col-lg-4"></div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
// Image by <a href="https://www.freepik.com/free-psd/3d-illustration-human-avatar-profile_58509057.htm#query=default%20avatar&position=39&from_view=keyword&track=ais&uuid=cb3bbe3b-6e10-4a44-a39b-ebf587ab07a4">Freepik</a>
