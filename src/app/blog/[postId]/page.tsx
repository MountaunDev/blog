"use client";
import React, { useEffect, useState } from "react";

import { getPostById } from "@/app/services/blogService";
import Breadcrumb from "@/common/components/Breadcumb/Breadcrumb";
import Header from "@/common/components/Header/Header";
import { IModifiedBlogPostFields } from "@/types/blog";
import PostThumbnail from "../components/PostThumbnail";
import PostAuthor from "./components/PostAuthor";

const BlogDetails = ({ params }: { params: { postId: string } }) => {
  const { postId } = params;
  const [postData, setPostData] = useState<IModifiedBlogPostFields>();

  useEffect(() => {
    (async () => {
      const data = await getPostById(postId);
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
                    <PostThumbnail imagesBanner={postData.imagesBanner} />
                    <div className="author">
                      <div className="author-thumb">
                        <img src={`/blog/author-1.png`} alt="Blog Author" />
                      </div>
                      <div className="info">
                        <h6 className="author-name">
                          {postData.postAuthor?.fields.name}
                        </h6>
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
