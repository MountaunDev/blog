import { createClient } from "contentful";
import { formatEntryAndRichTextFields } from "./util";

const client = createClient({
  space: process.env.contenful_space,
  accessToken: process.env.contentful_accessToken,
  environment: process.env.contentful_environment,
});

console.log('env ->', process.env.contenful_space);
export async function fetchBlogEntries(): Promise<any> {
  try {
    const response = await client.getEntries({
      content_type: "blogPost",
    });
    const formatedResponse = formatEntryAndRichTextFields(response.items);
    return formatedResponse;
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
