import Shimmer from "@/common/components/Skeleton/Shimmer";
import SkeletonBase from "@/common/components/Skeleton/SkeletonBase";
import React from "react";

function PostListItemSkeleton() {
  return (
    <div className="skeleton-wrapper">
      <div className="blog-grid">
        <SkeletonBase type="title" />
        <div className="author">
          <div className="author-thumb"></div>
          <SkeletonBase type="author-avatar" />
          <div className="info">
            <SkeletonBase type="text" />
            <SkeletonBase type="text" />
          </div>
        </div>
        <div className="post-thumbnail">
          <SkeletonBase type="post-thumbnail" />
        </div>
        <SkeletonBase type="text" />
        <SkeletonBase type="text" />
      </div>
      <Shimmer />
    </div>
  );
}

export default PostListItemSkeleton;
