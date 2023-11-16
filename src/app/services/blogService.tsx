import { fetchBlogEntries, fetchEntryById } from "@/contentful/index";
import { IModifiedBlogPostFields } from "@/types/blog";

export async function fetchBlogPosts(): Promise<IModifiedBlogPostFields[]> {
  try {
    return await fetchBlogEntries();
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
