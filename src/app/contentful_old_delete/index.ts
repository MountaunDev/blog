import { createClient } from "contentful";
import { formatEntryAndRichTextFields } from "./util";
import { IFetchBlogPostsResponse } from "@/types/blog";

const client = createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID || "",
  accessToken: process.env.NEXT_PUBLIC_ONTENTFUL_ACCESS_TOKEN || "",
  environment: process.env.NEXT_PUBLIC_CONTENTFUL_ENVIRONMENT || "",
});

export async function fetchBlogEntries(
  pageNumber: number,
  pageSize: number,
): Promise<IFetchBlogPostsResponse> {
  try {
    const skip = pageNumber * pageSize;
    const response = await client.getEntries({
      content_type: "blogPost",
      order: "-fields.publishDate" as any,
      limit: pageSize,
      skip: skip,
    });
    const formatedResponse = formatEntryAndRichTextFields(response.items);
    return {
      total: response.total,
      items: formatedResponse,
    };
  } catch (error) {
    throw error;
  }
}

export async function fetchEntryById(entryId: string, contentType: string) {
  try {
    const options = {
      content_type: contentType,
      "sys.id": entryId,
      limit: 1,
    };

    const response = await client.getEntries(options);
    if (response.items.length > 0) {
      const formatedResponse = formatEntryAndRichTextFields(response.items);
      return formatedResponse;
    } else {
      return null;
    }
  } catch (error) {
    console.error("Error fetching entry:", error);
    return null;
  }
}
