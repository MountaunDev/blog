"use client";
import Header from "@/common/components/Header/Header";
import Breadcrumb from "@/common/components/Breadcumb/Breadcrumb";
import PostList from "@/app/blog/components/PostList";
import { fetchBlogPosts } from "../services/blogService";
import { useEffect, useState } from "react";
import { IModifiedBlogPostFields } from "@/types/blog";

export default function BlogHome() {
  const [data, setData] = useState<IModifiedBlogPostFields[]>();

  useEffect(() => {
    (async function () {
      const data = await fetchBlogPosts();
      setData(data);
    })();
  }),
    [];

  return (
    <>
      <main className="main-wrapper">
        <Header />
        <h3 className="title">{JSON.stringify(data, null, 4)}</h3>
        <Breadcrumb title="Blog" page="Blog" />
        <div className="section-padding-equal">
          <div className="container">
            <div className="row row-40">
              <div className="col-lg-8">
                {data && <PostList blogData={data} />}
              </div>
              <div className="col-lg-4"></div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
