import {
  fetchAllEntries,
  fetchBlogEntries,
  fetchEntryById,
} from "@/contentful/index";
import { IFetchBlogPostsResponse } from "@/types/blog";
import { FetchAllTopicsResponse } from "@/types/topic";

export async function fetchBlogPosts(
  pageNumber: number,
  pageSize: number,
): Promise<IFetchBlogPostsResponse> {
  try {
    return await fetchBlogEntries(pageNumber, pageSize);
  } catch (error) {
    throw error;
  }
}

export async function getPostById(postId: string): Promise<any> {
  try {
    return await fetchEntryById(postId, "blogPost");
  } catch (error) {
    throw error;
  }
}

export async function getAllTopics(): Promise<FetchAllTopicsResponse> {
  try {
    return await fetchAllEntries({ content_type: "topics" });
  } catch (error) {
    throw error;
  }
}
