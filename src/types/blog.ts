import { ReactNode } from "react";
import { IBlogPostFields } from "../../@types/generated/contentful";

type Modify<T, R> = Omit<T, keyof R> & R;

export type IModifiedBlogPostFields = Modify<
  IBlogPostFields,
  {
    id?: string;
    content: ReactNode;
  }
>;
