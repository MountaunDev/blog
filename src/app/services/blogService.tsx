import { fetchBlogEntries, fetchEntryById } from "@/contentful/index";
import { IModifiedBlogPostFields } from "@/types/blog";

export async function fetchBlogPosts(): Promise<IModifiedBlogPostFields[]> {
  try {
    return await fetchBlogEntries();
  } catch (error) {
    throw error;
  }
}

export async function getEntryById(): Promise<any> {
  try {
    // return await fetchEntryById("6QprdkjcKIQHH2LfepqmTb", "blogPost");
    return await fetchEntryById("H8MFfGgEhe5mxn6cFaJR6", "blogPost");
  } catch (error) {
    throw error;
  }
}
