import { createClient } from "contentful";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { Document } from "@contentful/rich-text-types";

const client = createClient({
  space: "dcyvpoci5no4",
  accessToken: "slzfbfWr8KXSW597CfdS8BmRMY5Z5wRSqY2KHEpXf2s",
  environment: "master",
});

export async function fetchBlogEntries(): Promise<any> {
  try {
    const response = await client.getEntries({
      content_type: "blogPost",
    });
    const test2 = response.items.map((item) => {
      const formatedRichText = item.fields.content && {
        ...item.fields,
        content: documentToReactComponents(item.fields.content as Document),
      };
      return formatedRichText;
    });
    return test2;
  } catch (error) {
    throw error;
  }
}
