import { fetchBlogEntries } from "@/contentful/index";
import { IModifiedBlogPostFields } from "@/types/blog";

export async function fetchBlogPosts(): Promise<IModifiedBlogPostFields[]> {
  try {
    return await fetchBlogEntries();
  } catch (error) {
    throw error;
  }
}
