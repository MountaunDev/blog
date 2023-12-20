import React from "react";
import Link from "next/link";
import blogImage from "@/app/public/images/12.jpg";
import { FaRegClock, FaMapMarkerAlt } from "react-icons/fa";
import { IModifiedBlogPostFields } from "@/types/blog";
import Image from "next/image";
import { extractDate_dd_mm_yyyy } from "@/common/util/date";
interface Props {
  blogData: IModifiedBlogPostFields[];
}

const MAX_LENGTH = 130;
const PostList = ({ blogData }: Props) => {
  return (
    <>
      {blogData.map((blogItem, index) => (
        <div className="col-md-6" key={index}>
          <div className="blog-agency">
            <div className="blog-contain">
              <Image
                alt="postImage"
                className="img-fluid"
                src={
                  blogItem.imagesBanner ? blogItem.imagesBanner[0] : blogImage
                }
                width={1600}
                height={1161}
              />
              <div className="img-container">
                <div>
                  <div className="blog-info">
                    <div className="m-b-20">
                      <div className="center-text">
                        {blogItem.publishDate && (
                          <>
                            <FaRegClock className="m-r-10" size={16} />
                            <h6 className="m-r-25 font-blog">
                              {extractDate_dd_mm_yyyy(blogItem.publishDate)}
                            </h6>{" "}
                          </>
                        )}
                        <>
                          <FaMapMarkerAlt className="m-r-10" size={16} />
                          <h6 className="font-blog">{"Girardot"}</h6>{" "}
                        </>
                      </div>
                    </div>
                    <h5 className="blog-head font-600">{blogItem.title}</h5>
                    {blogItem.shortDescription.length > MAX_LENGTH ? (
                      <p className="para2">{`${blogItem.shortDescription.substring(
                        0,
                        MAX_LENGTH,
                      )}...`}</p>
                    ) : (
                      <p className="para2">{blogItem.shortDescription}</p>
                    )}

                    <div className="btn-bottom m-t-20">
                      <Link href={`blog/${blogItem.id}`}>read more</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default PostList;
