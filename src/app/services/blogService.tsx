import {
  fetchAllEntries,
  fetchBlogEntries,
  fetchEntryById,
  fetchPostsBySearchCriteria,
} from "@/contentful/index";
import { IFetchBlogPostsResponse } from "@/types/blog";
import { EnhancedTopicsFields, FetchAllTopicsResponse } from "@/types/topic";

//TODO: Fix the types in all these functions
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

export async function getPostsBySearchQuery(
  searchCriteria: string,
): Promise<any> {
  try {
    return await fetchPostsBySearchCriteria(searchCriteria);
  } catch (error) {
    throw error;
  }
}

export async function getAllTopics(): Promise<FetchAllTopicsResponse> {
  try {
    return await fetchAllEntries<EnhancedTopicsFields>({
      content_type: "topics",
    });
  } catch (error) {
    throw error;
  }
}
