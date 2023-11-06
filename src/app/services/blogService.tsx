import { fetchBlogEntries } from "@/contentful/index";
import { IBlogPostFields } from "../../../@types/generated/contentful.d";
import { ReactNode } from "react";

type Modify<T, R> = Omit<T, keyof R> & R;

type IModifiedBlogPostFields = Modify<
  IBlogPostFields,
  {
    content: ReactNode;
  }
>;

export async function fetchBlogPosts(): Promise<IModifiedBlogPostFields[]> {
  try {
    return await fetchBlogEntries();
  } catch (error) {
    throw error;
  }
}
