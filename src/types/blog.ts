import { ReactNode } from "react";
import { IBlogPostFields } from "../../@types/generated/contentful";
import { AuthorPost } from "./author";

type Modify<T, R> = Omit<T, keyof R> & R;

export type IModifiedBlogPostFields = Modify<
  IBlogPostFields,
  {
    id?: string;
    content: ReactNode;
    postAuthor: AuthorPost;
  }
>;

export type IFetchBlogPostsResponse = {
  total: number;
  items: IModifiedBlogPostFields[];
}
