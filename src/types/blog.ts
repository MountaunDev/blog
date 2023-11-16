import { ReactNode } from "react";
import { IAuthor, IBlogPostFields } from "../../@types/generated/contentful";
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
