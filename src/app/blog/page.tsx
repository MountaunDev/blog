"use client";
import { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import ReactPaginate from "react-paginate";
import PostList from "@/app/blog/components/PostList";
import Breadcrumb from "@/common/components/Breadcumb/Breadcrumb";
import Header from "@/common/components/Header/Header";
import { fetchPostsByTopic } from "@/contentful";
import { IFetchBlogPostsResponse } from "@/types/blog";
import { fetchBlogPosts } from "../services/blogService";
import BlogSidebar from "./components/BlogSideBar/BlogSideBar";
import PostListItemSkeleton from "./components/PostListItemSkeleton";

const PAGE_SIZE = 10;

export type FilterPostByBadge = ({
  topicsSelected,
}: {
  topicsSelected: string[];
}) => void;

export default function BlogHome() {
  const [data, setData] = useState<IFetchBlogPostsResponse>();

  const [pageNumber, setPageNumber] = useState(0);

  const fetchMoreEntries = async ({ selected }: { selected: number }) => {
    setPageNumber(selected);
  };

  const filterPostsByBadge: FilterPostByBadge = async ({
    topicsSelected,
  }: any) => {
    let postsData;
    if (topicsSelected.length === 0) {
      postsData = await fetchBlogPosts(pageNumber, PAGE_SIZE);
    } else {
      postsData = await fetchPostsByTopic(topicsSelected);
    }
    setData(postsData);
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
              <div className="col-lg-9">
                {!data ? (
                  // TODO: This Skeleton is not updated to the last design
                  <PostListItemSkeleton />
                ) : (
                  <Row>
                    <PostList blogData={data.items} />
                  </Row>
                )}
                {data.total > PAGE_SIZE && (
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
                )}
              </div>
              <div className="col-lg-3">
                <BlogSidebar
                  filterPostsByBadge={filterPostsByBadge}
                  posts={data.items}
                />
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
// Image by <a href="https://www.freepik.com/free-psd/3d-illustration-human-avatar-profile_58509057.htm#query=default%20avatar&position=39&from_view=keyword&track=ais&uuid=cb3bbe3b-6e10-4a44-a39b-ebf587ab07a4">Freepik</a>
