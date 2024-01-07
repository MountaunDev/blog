import { IFetchBlogPostsResponse } from "@/types/blog";
import { createClient } from "contentful";
import { formatEntryAndRichTextFields } from "./util";

const client = createClient({
  space: "dcyvpoci5no4",
  accessToken: "slzfbfWr8KXSW597CfdS8BmRMY5Z5wRSqY2KHEpXf2s",
  environment: "master",
});

// const client = createClient({
//   space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID || "",
//   accessToken: process.env.NEXT_PUBLIC_ONTENTFUL_ACCESS_TOKEN || "",
//   environment: process.env.NEXT_PUBLIC_CONTENTFUL_ENVIRONMENT || "",
// });

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

export async function fetchPostsBySearchCriteria(
  searchCriteria: string,
): Promise<any> {
  try {
    const options = {
      content_type: "blogPost",
      "fields.title[match]": searchCriteria,
    };

    const response = await client.getEntries(options);
    if (response.items.length > 0) {
      const formatedResponse = formatEntryAndRichTextFields(response.items);
      return {
        total: response.total,
        items: formatedResponse,
      };
    }
    return null;
  } catch (error) {
    console.error("Error fetching entry:", error);
    return null;
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

interface FetchAllEntriesProps {
  content_type: string;
}
export async function fetchAllEntries<T>({
  content_type,
}: FetchAllEntriesProps): Promise<{ total: number; items: T[] }> {
  try {
    const response = await client.getEntries({
      content_type,
      order: "-fields.label" as any,
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
export async function fetchPostsByTopic(
  topicsSelected: string[],
): Promise<any> {
  try {
    const response = await client.getEntries({
      content_type: "blogPost",
      "fields.topics.sys.id[in]": topicsSelected.join(","),
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
