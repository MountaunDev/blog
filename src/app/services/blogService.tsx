import { fetchBlogEntries, fetchEntryById } from "@/contentful/index";
import { IFetchBlogPostsResponse, IModifiedBlogPostFields } from "@/types/blog";

export async function fetchBlogPosts(pageNumber: number, pageSize: number): Promise<IFetchBlogPostsResponse> {
  try { 
    return await fetchBlogEntries(pageNumber, pageSize);
  } catch (error) {
    throw error;
  }
}

export async function getEntryById(postId: string): Promise<any> {
  try {
    return await fetchEntryById(postId, "blogPost");
  } catch (error) {
    throw error;
  }
}
