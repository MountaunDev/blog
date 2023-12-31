import { extractDate_dd_mm_yyyy } from "@/common/util/date";
import { IModifiedBlogPostFields } from "@/types/blog";
import Link from "next/link";
import React from "react";
import { FaMapMarkedAlt, FaRegClock } from "react-icons/fa";
import PostThumbnail from "./PostThumbnail";
import { useRouter } from "next/navigation";
interface Props {
  blogData: IModifiedBlogPostFields[];
}

const SHORT_DESCRIPTION_MAX_LENGHT = 130;

const PostList = ({ blogData }: Props) => {
  const router = useRouter();

  const navigateToBlogPost = (postId: string) => {
    router.push(`/blog/${postId}`);
  };

  if (blogData.length === 0) {
    //TODO: Create a nice component to render when there is no data to show
    return "No he encontrado elementos";
  }
  return (
    <>
      {blogData.map((data) => (
        <div
          role="button"
          tabIndex={0}
          aria-label="Click Me"
          className="col-md-6 cursor-pointer "
          key={data.id}
          onClick={() => navigateToBlogPost(data.id!)}
        >
          <div className="blog-grid blog-post-container">
            <PostThumbnail imagesBanner={data.imagesBanner} />
            <div className="pb-6 px-6">
              <div className="center-text flex gap-4 mb-2">
                {data.publishDate && (
                  <div className="flex gap-2 items-center">
                    <FaRegClock className="m-r-10" size={16} />
                    <span className="m-r-25 font-blog text-sm">
                      {extractDate_dd_mm_yyyy(data.publishDate)}
                    </span>{" "}
                  </div>
                )}
                <div className="flex gap-2 items-center">
                  <FaMapMarkedAlt className="m-r-10" size={16} />
                  <span className="font-blog text-sm">{"Girardot"}</span>{" "}
                </div>
              </div>
              <h5 className="title">
                <Link
                  className="no-underline text-xl"
                  href={`/blog/${data.id}`}
                >
                  {data.title}
                </Link>
              </h5>
              {data.shortDescription.length > SHORT_DESCRIPTION_MAX_LENGHT ? (
                <p className="text-sm">{`${data.shortDescription.substring(
                  0,
                  SHORT_DESCRIPTION_MAX_LENGHT,
                )}...`}</p>
              ) : (
                <p className="text-sm">{data.shortDescription}</p>
              )}
              <Link
                href={`/blog/${data.id}`}
                className="text-blue-600 no-underline"
              >
                Leer más
              </Link>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default PostList;
